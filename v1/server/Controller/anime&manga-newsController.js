import axios  from "axios";
import * as cheerio from 'cheerio';


function Success(res,code,msg,data){
    res.status(code).send({
        "success":true,
        "msg":msg,
        "data": data 
    })
}

function Error(res,code,error,msg){
     res.status(code).send({
        "success":false,
        "msg":msg,
        "error":error
    })
}

const allAnimeAndMangaNews= async(req, res)=>{
    try {

        const {next} = req.query;
        
        const url = `https://myanimelist.net/news?p=${next || 1}`
        
        const AnimeAndMangaNewsList = [];

        axios(url).then(response=>{
            const html = response.data;
            const $ = cheerio.load(html);
            $('div.news-unit').each(function(){

                let link = $(this).find('a.image-link').attr('href');
                const newsId = link?.slice(29)
                const img = $(this).find('img.image').attr('src')
                const title  = $(this).find('div.news-unit-right').find('p.title').text().trim();
                const text = $(this).find('div.text').text().trim();
                const timeStamp = $(this).find('div.information').find('p.info').text().trim().split("by").at(0);
                const tagsText = $(this).find('div.information').find('p.tags').find('a.tag').text()
                const tagsAddon = $(this).find('div.information').find('p.tags').find('a.tag').attr('class');
                let tagsAddonClass = (!tagsAddon ? "":tagsAddon.split(" ").at(1));
                 
                 let tags = (!tagsText?["news"]:tagsText.match(/[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*/g) || []);

                 const tagMap = {
                    "tag-color1":"Anime",
                    "tag-color2":"Manga",
                    "tag-color3":"People",
                    "tag-color4":"Music",
                    "tag-color5":"Events",
                    "tag-color6":"Industry"
                 }

                 if(tagMap[tagsAddonClass]){
                    tags.push(tagMap[tagsAddonClass])
                 }
                      
                if(!title){
                    console.log({title,link,newsId,img,text,timeStamp,tags});  
                }else{
                    const newLink = link.slice(29)
                    AnimeAndMangaNewsList.push({title,link,newsId,img,text,timeStamp,tags});
                }
            });
            
            Success(res,200,"Success",AnimeAndMangaNewsList);
        })

    } catch (error) {
        Error(res,500,error,"Server Unreachable");
    }
}

const animeNewsDetails = async (req, res)=>{
    try {
        const {id} = req.query;
        
        const url = `https://myanimelist.net/news/${id}`;
        
        const newsDetailsDataList=[]

        await axios.get(url).then((response)=>{
            const html = response.data;
            const $ = cheerio.load(html);
            $('div.content-left').each(function(){
                const title = $(this).find('div.news-container').find('h1.title').text();
                const info = $(this).find('div.content').text().trim().split("\n").filter((item)=>item!=="");
                const poster = $(this).find('div.content').find('img.userimg').attr('src');
                const width = $(this).find('div.content').find('iframe.youtube').attr('width');
                const height = $(this).find('div.content').find('iframe.youtube').attr('height');
                const src = $(this).find('div.content').find('iframe.youtube').attr('src');
                const tags = $(this).find('div.tags').find('a').append(',').text().trim().split(',');
                
                newsDetailsDataList.push({title,info,poster,video:{width,height,src},tags});
            })

        })
            res.status(200).json(newsDetailsDataList)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

export {allAnimeAndMangaNews,animeNewsDetails}
import { response } from "express";

function resFun(res,code,msg,obj){
    res.status(code).send({
        success:true,
        msg:msg,
        data: obj,   
    })
}

function ErrFun(res,code,error,msg){
    res.status(code).send({
        success: false,
        msg:msg,
        data:error
    })

}

const mangaServices = async(req, res)=>{

try {

const { next , type }=req.body || req.query;
const url = !type?`https://myanimelist.net/topmanga.php?limit=${next}`:
            `https://myanimelist.net/topmanga.php?type=${type}&limit=${next}`;

    const TopMangaList = [];
    await axios(url).then(response=>{
        const html = cheerio.load(response.data);
        const $ = cheerio.load(html);

        $('tr.ranking-list').each(function(){
            const srNo =$(this).find('td.rank').find('span').text();
            const link = $(this).find('td.title').find('a.hoverinfo_trigger').attr('href');
            const img = $(this).find('td.title').find('a.hoverinfo_trigger').find('img').attr('data-src');
            const name = $(this).find('td.title').find('div.detail').find('a.hoverinfo_trigger').text()
            const info = $(this).find('td.title').find('div.detail').find('div.information').text()
            const score = $(this).find('td.score').find('span.score-label').text();
            
            TopMangaList.push({srNo,name,link,img,info,score})
        })

        resFun(res,200,"Success",TopMangaList)
    })

} catch (error) {
    ErrFun(res,500,error,"Server Unreachable.");
}
    
}


export { mangaServices }
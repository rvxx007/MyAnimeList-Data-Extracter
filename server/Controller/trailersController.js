import axios from 'axios';
import * as cheerio from 'cheerio';


const getTrailersData = async(req, res)=>{
    try {

        const { p } = req.query;

        if(!p){
            return res.status(409).json({
                success:false,
                msg:"Bad Request : query parameter p is missing (pass p as a number ex:1 or string 'popular' only)"
            })
        }

        const trailersList = [];

        const url = (p==="popular"?`https://myanimelist.net/watch/promotion/${p}`:`https://myanimelist.net/watch/promotion?p=${p}` );

        await axios.get(url, {
            maxBodyLength:Infinity,
            redirect:"follow",
            "Content-Type":"application/json"
        }).then((response)=>{
            const html = response.data;
            const $ = cheerio.load(html);

            $("div.video-list-outer-vertical").each(function(){
                const title = $(this).find("a.mr4").text();
                const type = $(this).find("div.info-container").text();
                const poster = $(this).find("a.iframe").attr('data-bg');
                const vlink = $(this).find("a.iframe").attr('href');

                trailersList.push({title,type,poster,vlink})
            })

        })

        res.status(200).json(trailersList);
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Server Unavailable",
            error:error.message
        });
    }
}


export { getTrailersData}
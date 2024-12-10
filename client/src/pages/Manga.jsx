import axios from "axios";
import { useEffect, useState } from "react";
import ItemsCard from "../components/ItemsCard";
import FilterNav from "../components/FilterNav";
import Loader from "../components/Loader";

const Manga = () => {

  const [mangaData, setMangaData] = useState([])
  const [nxtPage, setNxtPage] = useState(0);
  const [type, setType] = useState("");

  const fetchData = async()=>{
   
    const url = (!type?`https://myanimelist-data-extracter.onrender.com/api/v1/top-manga/get/all?next=${nxtPage}`:`https://myanimelist-data-extracter.onrender.com/api/v1/top-manga/get/all?next=${nxtPage}&type=${type}`)
   
      await axios.get(url).then((response)=>{
        const result = response.data;
        setMangaData(result.data);
      }).catch((err)=>{
        console.error(err);
      })
  }

  useEffect(()=>{
    fetchData();
  },[nxtPage, type])


  const mangaTyArr =[{value:"manga",name:"Top Manga"},
    {value:"oneshots",name:"Top One-shots"},
    {value:"doujin",name:"Top Doujinshi"},
    {value:"lightnovels",name:"Top Light Novels"},
    {value:"novels",name:"Top Novels"},
    {value:"manhwa",name:"Top Manhwa"},
    {value:"manhua",name:"Top Manhua"},
    {value:"bypopularity",name:"Top Manga by Popularity"},
    {value:"favorite",name:"Top Most Favorite"}];

  return (
     <main className="container flex flex-col">
    <header>
    <FilterNav tyArr={mangaTyArr} nxobj={[nxtPage, setNxtPage]} tyobj={[type, setType]}/>
    </header>
    <section className=" flex justify-center items-center gap-4 flex-wrap">
      {(mangaData.length === 0  || mangaData === undefined  ?<Loader/> :mangaData.map((items)=>(<ItemsCard key={items.srNo} items={items} />)))}
    </section>
    </main>
  )
}

export default Manga
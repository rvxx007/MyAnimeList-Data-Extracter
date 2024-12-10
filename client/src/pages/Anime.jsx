import axios from "axios";
import { useEffect, useState } from "react"
import ItemsCard from "../components/ItemsCard";
import FilterNav from "../components/FilterNav";
import Loader from "../components/Loader";

const Anime = () => {

  const [animeData, setAnimeData] = useState([]);
  const [nxtPage, setNxtPage] = useState(0);
  const [type, setType] = useState("");

  const fetchData = async()=>{
    const url = (!type?`https://myanimelist-data-extracter.onrender.com/api/v1/top-anime/get/all?next=${nxtPage}`:`https://myanimelist-data-extracter.onrender.com/api/v1/top-anime/get/all?next=${nxtPage}&type=${type}`)
    
      await axios.get(url)
      .then((response)=>{
        const result = response.data;
        setAnimeData(result.data);
      }).catch((err)=>{
        console.error(err);
      })
  }

useEffect(()=>{
  fetchData();
},[nxtPage,type])

const AnimeTyArr =[{value:"airing",name:"Top Airing"},
  {value:"upcoming",name:"Top Upcoming"},
  {value:"tv",name:"Top TV Series"},
  {value:"ova",name:"Top OVA Series"},
  {value:"ona",name:"Top ONA Series"},
  {value:"special",name:"Top Special"},
  {value:"bypopularity",name:"Top Anime by Popularity"},
  {value:"favorite",name:"Most Favorite"}]
  
  return (
    <main className="container flex flex-col">
    <header>
    <FilterNav tyArr={AnimeTyArr} nxobj={[nxtPage, setNxtPage]} tyobj={[type, setType]}/>
    </header>
    <section className="w-full h-full flex justify-center items-center gap-4 flex-wrap">
      {(animeData.length === 0  || animeData === undefined  ?<Loader/> :animeData.map((items)=>(<ItemsCard key={items.srNo} items={items} />)))}
    </section>
    </main>
  )
}

export default Anime
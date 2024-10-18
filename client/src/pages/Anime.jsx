import axios from "axios";
import { useEffect, useState } from "react"
import loader from '../assets/loaderx.gif'
import ItemsCard from "../components/ItemsCard";
import FilterNav from "../components/FilterNav";

const Anime = () => {

  const [animeData, setAnimeData] = useState([]);
  const [nxtPage, setNxtPage] = useState(0);
  const [type, setType] = useState("");

  const fetchData = async()=>{
    const url = (!type?`https://myanimelist-data-extracter.onrender.com/api/v1/top-anime/get/all?next=${nxtPage}`:`https://myanimelist-data-extracter.onrender.com/api/v1/top-anime/get/all?next=${nxtPage}&type=${type}`)
    
    // const obj = {
    //   method: "GET",
    //   headers:{ 
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: "follow",
    // };
    
      await axios.get(url)
      .then((response)=>{
        const result = response.data;
        setAnimeData(result.data);
      }).catch((err)=>{
        console.error(err);
      })
  }

console.log(animeData);


useEffect(()=>{
  fetchData();
},[nxtPage,type])

  
  return (
    <main className="container flex flex-col">
    <header>
    {/* <FilterNav nxobj={[nxtPage, setNxtPage]} tyobj={[type, setType]}/> */}
    </header>
    <section className=" flex justify-center items-center gap-4 flex-wrap">
      {/* {(animeData === undefined  ?<><img src={loader} alt="Loading..." /></> :animeData.map((items)=>(<ItemsCard key={items.srNo} items={items} />)))} */}
    </section>
    </main>
  )
}

export default Anime
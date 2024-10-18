import axios from "axios";
import { useEffect, useState } from "react";
import ItemsCard from "../components/ItemsCard";
import loader from '../assets/loaderx.gif'

const Manga = () => {

  const [mangaData, setMangaData] = useState([])
  const [nxtPage, setNxtPage] = useState(0);
  const fetchData = async()=>{
    const url = "https://myanimelist-data-extracter.onrender.com/api/v1/top-manga/get/all"
    const body={
        next: nxtPage,
    }
      await axios.get(url,body).then((response)=>{
        const result = response.data;
        setMangaData(result.data);
      }).catch((err)=>{
        console.error(err);
      })
  }

  useEffect(()=>{
    fetchData();
  },[nxtPage])


  return (
    <main className="container flex flex-col">
    <header>

    </header>
    <section className="flex justify-center items-center gap-4 flex-wrap">
      {(mangaData.length===0 ?<><img src={loader} alt="Loading..." /></> :mangaData.map((items)=>(<ItemsCard key={items.srNo} items={items} />)))}
    </section>
    <button onClick={()=>(setNxtPage(nxtPage+50))} className="px-7 py-4 mx-auto text-xl font-bold bg-black text-white rounded-xl shadow-md">Next 50</button>
    </main>
  )
}

export default Manga
import axios from "axios";
import { useEffect, useState } from "react"
import loader from '../assets/loaderx.gif'
import ItemsCard from "../components/ItemsCard";

const Anime = () => {

  const [animeData, setAnimeData] = useState([]);
  const [nxtPage, setNxtPage] = useState(0);
  const fetchData = async()=>{
    const url = "https://myanimelist-data-extracter.onrender.com/api/v1/top-anime/get/all"
    const body={
        next: nxtPage,
        type:""
    }
      await axios.get(url,body).then((response)=>{
        const result = response.data;
        setAnimeData(result.data);
      }).catch((err)=>{
        console.error(err);
      })
  }

  useEffect(()=>{
    fetchData();
  },[nxtPage])

  
  return (
    mangaData
  )
}

export default Anime
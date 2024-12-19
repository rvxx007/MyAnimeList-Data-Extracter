import { useEffect, useState } from "react";
import axios from 'axios';
import FilterNav from "../components/FilterNav";
import Loader from "../components/Loader";

import {v4 as uuidv1} from 'uuid'
import { Link } from "react-router-dom";

const News = () => {
  const [newsData, setNewsData] = useState([])
  const [nxtPage, setNxtPage] = useState(1);
  const [type, setType] = useState("");

  const fetchData = async()=>{
    const url = `https://myanimelist-data-extracter.onrender.com/api/v1/anime-and-manga-news/get/all?next=${nxtPage}`;
      //  const url = `http://localhost:5000/api/v1/anime-and-manga-news/get/all?next=${nxtPage}`;
   
      await axios.get(url,{
        headers: {
          "redirect":"follow",
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          }
      }).then((response)=>{
        setNewsData(response.data.data);
      }).catch((err)=>{
        console.error(err);
      })
  }

  useEffect(()=>{
    fetchData();
  },[nxtPage, type])
  
 
  return (
     <main className="container flex flex-col">
    <header className="w-full">
    <FilterNav dt={newsData} nxobj={[nxtPage, setNxtPage]} tyobj={[type, setType]}/>
    </header>
    <section className=" flex justify-center items-center gap-4 flex-wrap">
      {(newsData.length === 0  || newsData === undefined ?<Loader/> :newsData?.map((items)=>(
      
      <div key={uuidv1()}>
      <Link to={`/news/${items.newsId}`}>
      <div
          className="w-full h-full group hover:text-white hover:bg-black hover: border-2 border-gray-200 my-2 flex flex-col md:flex-row items-center p-5 gap-4 rounded-xl shadow-md ">
            <div>
            <img className="w-full h-full group-hover:w-[7rem] group-hover:shadow-2xl rounded-md shadow-lg" src={items.img} alt={items.name} />
            </div>
            <div className="flex flex-col justify-center items-start ">
            <h1 className="font-bold">{items.title}</h1>
            <hr />
            <p className="text-gray-500">{items.text}</p>
            <div className="text-sm my-2 flex flex-row justify-start items-center gap-5">
              {items.tags.map((item)=>(<span key={uuidv1()} className={"p-1 shadow-sm rounded-sm group-hover:border-2 group-hover:border-gray-600 "}>{item}</span>))}
            </div>
            </div>
      </div>
      </Link>
      </div>
      )))}
    </section>
    </main>
  )
}

export default News
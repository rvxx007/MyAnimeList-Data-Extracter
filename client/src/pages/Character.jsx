
import { useEffect, useState } from "react";
import axios from 'axios';
import FilterNav from "../components/FilterNav";
import Loader from "../components/Loader";

import {v4 as uuidv1} from 'uuid'


const Character = () => {
    const [characterData, setCharacterData] = useState([])
    const [nxtPage, setNxtPage] = useState(0);
    const [type, setType] = useState("");

    const fetchData = async()=>{
        // const url = `http://localhost:5000/api/v1/character/get?limit=${nxtPage}`;
        const url = `https://myanimelist-data-extracter.onrender.com/api/v1/character/get?limit=${nxtPage}`;
       
          await axios.get(url,{
            maxBodyLength:Infinity,
            "redirect":"follow",
            "Content-Type":"application/json"
          })
          .then(response=>setCharacterData(response.data))
          .catch(err=>console.error(err))
      }
    
      useEffect(()=>{
        fetchData();
      },[nxtPage])      

      
  return (
    <main className="container flex flex-col justify-between items-start">
    <header>
    <FilterNav nxobj={[nxtPage, setNxtPage]} tyobj={[type, setType]}/>
    </header>

    {characterData.length === 0 ? <Loader/>: <section  className="w-full flex justify-center items-center gap-4 flex-wrap">
      {characterData?.map((items)=>(
      
      <div className="w-full "  key={uuidv1()}>
      
      <div className="w-full h-full  group hover:text-white hover:bg-black hover:border-2 border-gray-200 my-2 flex flex-row justify-start items-center p-5 gap-20 rounded-xl shadow-md ">
            <div >
              <h1 className="w-[3rem] text-xl font-sans font-bold"># {items.srno}</h1>
            </div>
            <div  className="w-[400px] flex justify-start items-start gap-5">
            <div >
            <img className="w-[4rem] h-full group-hover:w-[5rem] group-hover:shadow-2xl rounded-md shadow-lg" src={items.img} alt={items.name} />
            </div>
            <div  className="h-full flex flex-col justify-between items-start gap-8">
            <div>
            <h1 className="font-bold">{items.ename}</h1>
            <h1 className="font-bold">{items.jname}</h1>
            </div>
            <span className=" font-semibold">Favorites: {items.favorites}</span>
            </div>
            </div>

            <div className="w-full flex flex-row justify-start items-start gap-20" >
            <div  className="w-[50%] flex flex-col justify-between items-start ">
              <h1 className="font-bold">Animeography</h1>
              {items.animeography.map((item)=><p key={uuidv1()} className="text-gray-500">{item}</p>)}
            </div>
            <div  className="w-[50%] flex flex-col justify-between items-start ">
            <h1 className="font-bold">Mangaography</h1>
              {items.mangaography.map((item)=><p key={uuidv1()} className="text-gray-500">{item}</p>)}
            </div>
            </div>
            
      </div>
      
      </div>
      ))}
    </section>}
    
    </main>
  )
}

export default Character
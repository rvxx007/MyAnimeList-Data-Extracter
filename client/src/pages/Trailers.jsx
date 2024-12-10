import axios from "axios"
import { useEffect, useState } from "react"
import FilterNav from "../components/FilterNav";
import Loader from "../components/Loader";
import PlayerIframe from "../components/PlayerIframe";
// import PlayerIframe from "../components/PlayerIframe";

const Trailers = () => {
    const [trailerData, setTrailerData] = useState([]);
    const [nxtPage, setNxtPage] = useState(1);
    const [type, setType] = useState("");
    const [show, setShow] = useState(false);
    const fetchData =async()=>{
        await axios.get(`http://localhost:5000/api/v1/tailers/get?p=${(type==="popular"?"popular":nxtPage)}`)
        .then((response)=>setTrailerData(response.data))
        .catch((error)=>console.error(error))
    }

    useEffect(()=>{
        fetchData();
    },[nxtPage,type])

    const trailersTyArr =[
        {value:"popular",name:"Popular"}
    ]

    const handleClickToggle = ()=>{
        if(show===true){
            setShow(false);
        }else{
            setShow(true);
        }
    }
    
  return (
    <>
    <main className="container flex flex-col justify-between items-start">
    <header  className="w-full ">
    <FilterNav tyArr={trailersTyArr} nxobj={[nxtPage, setNxtPage]} tyobj={[type, setType]}/>
    </header>
    <br />
    {/* <PlayerIframe /> */}
    <section className="w-full h-full flex justify-center items-center gap-4 flex-wrap z-0 relative">
       
      {(trailerData.length === 0  || trailerData === undefined  ?<Loader/> :trailerData.map((items,index)=>(
        <div  className={`w-[250px] ${(show===true?"h-full":"h-[500px]")} z-5 bg-white flex flex-col justify-start items-center shadow-xl rounded-md`} key={index}>
           
        <div className="relative">
            <img className="w-[250px] h-[340px] " src={items.poster} alt={items.title} />
            <span className=" text-sm p-2">{items.type}</span>
        </div>
        <h1 onClick={handleClickToggle} className="flex font-bold text-xl text-wrap flex-wrap justify-center items-center p-2">{items.title}</h1>
       <PlayerIframe data={items} />
      </div>)))}
    </section>
    
    </main>
    </>
  )
}

export default Trailers
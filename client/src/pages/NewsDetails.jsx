import axios from 'axios'
import { useEffect, useState } from 'react';

 const NewsDetails = () => {

    const  [nData, setNData] = useState({});
    let id = window.location.pathname.slice(6);

    const url = `https://myanimelist-data-extracter.onrender.com/api/v1/anime-and-manga-news/get/?id=${id}`
    // const url = `http://localhost:5000/api/v1/anime-and-manga-news/get/?id=${id}`

    const getData = async()=>{
      await axios.get(url).then((response)=>{
        setNData(response.data[0]);
      }).catch((err)=>console.error(err));
    }

    useEffect(()=>{
      getData()
    }, [id]);


    console.log(nData);
    
  return (
   <>
    <main className='flex flex-col gap-5'>
    <div className='flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start gap-6'>
      <img className=' w-[570px] rounded-md ' src={nData?.poster} alt="" />
      <div  className='w-full flex flex-col justify-between items-center gap-6'>
        
        <h1 className='w-full text-4xl text-center xl:text-start font-bold'>{nData?.title}</h1>
        <p className='w-full flex flex-col justify-between items-start gap-1 text-pretty'>
          {nData.info?.map((item,index)=>(<span key={index}>{item}</span>))}
        </p>
      </div>
      </div>
      <div  className='w-full flex flex-col  justify-between items-center gap-6'>
        <div  className='w-full  flex justify-between flex-row items-center gap-5'>
          {nData.tags?.map((item)=>(item !=="" && <span className='w-full  px-3 py-2 text-wrap shadow-lg text-bold text-center border border-gray-200' key={item}>{item}</span>))}
        </div>
        {nData.video && <iframe className=' w-full h-[900px]' src={nData && nData.video.src} >
        </iframe>}
        <div >
        </div>
      </div>
      

    </main>
   </>
  )
}

export default NewsDetails
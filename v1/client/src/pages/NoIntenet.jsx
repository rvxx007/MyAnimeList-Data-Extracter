
import NoInt from '../assets/nointernet.svg'

const NoIntenet = () => {
  return (
    <>
    <main  className=" overflow-x-hidden min-h-dvh min-w-dvw flex justify-center items-center flex-col gap-5">
    <span className='loading-bar-w bg-pink-400 p-1 rounded-full shadow-xl'></span>
        <div  className='w-full h-full md:pr-3 flex flex-col justify-center md:justify-between items-center relative'>
        <div className=' w-full h-full flex flex-row justify-evenly items-center gap-5 '>
        <span className='hidden md:flex loading-bar-w bg-pink-400 p-1 rotate-90 rounded-full shadow-xl'></span>
        <div  className="w-full md:w-[500px] flex flex-col justify-between items-center gap-5">
        <img className="w-[200px] h-[200px]  md:w-[250px] md:h-[250px] rounded-full" src={NoInt} alt="LOGO" />
        <h1 className=" md:w-[500px] text-center font-bold text-4xl ">Not Internet Connection</h1>
        </div>
        <span className='hidden md:flex loading-bar-w bg-pink-400 rotate-90 p-1 rounded-full shadow-xl'></span>
        </div>
        </div>
        <span className=' loading-bar-w bg-pink-400 p-1 rounded-full shadow-xl'></span>
        
    </main>
    </>
  )
}

export default NoIntenet
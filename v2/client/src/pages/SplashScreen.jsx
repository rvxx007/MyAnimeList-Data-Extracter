
import logo from '../assets/logo.jpeg'
import '../index.css'

const SplashScreen = () => {

  return (
    <>
    <main className=" overflow-x-hidden min-h-dvh min-w-dvw flex justify-center items-center flex-col gap-5">
    <span className='loading-bar-w bg-pink-400 p-1 rounded-full shadow-xl'></span>
        <div className='w-full h-full pr-3 flex flex-col justify-between items-center relative'>
        <div className=' w-full h-full flex flex-row justify-evenly items-center gap-5 '>
        <span className='loading-bar-w bg-pink-400 p-1 rotate-90 rounded-full shadow-xl'></span>
        <img className="w-[200px] md:w-[500px] md:h-[500px]" src={logo} alt="LOGO" />
        <span className='loading-bar-w bg-pink-400 rotate-90 p-1 rounded-full shadow-xl'></span>
        </div>
        </div>
        <span className=' loading-bar-w bg-pink-400 p-1 rounded-full shadow-xl'></span>
        
    </main>
    </>
  )
}

export default SplashScreen
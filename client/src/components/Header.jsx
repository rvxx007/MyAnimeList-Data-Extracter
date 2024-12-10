import { Link } from "react-router-dom"
import logo from "../assets/logo.jpeg"
import animeLogo from '../assets/anime.svg';
import mangaLogo from '../assets/manga.svg';
import newsLogo from '../assets/news.svg';
import traileLogo from '../assets/trailer.svg';
import characterLogo from '../assets/character.svg';


const Header = () => {
  return (
   <header className="w-full h-[90px] z-1000 bg-white fixed flex justify-center items-center ">
    <nav  className="w-full h-full rounded-xl shadow-lg p-5 container flex justify-between items-center flex-row">
        <div className="w-[20%] md:w-[50%] flex justify-start items-center gap-6 text-2xl font-bold">
        <img className="w-[50px] h-[50px]" src={logo} alt="Logo" /> <h1 className="hidden md:flex">MyAnimeList Extractor</h1>
        </div>
        <div className="w-[80%] md:w-[50%] flex justify-center items-center">
            <ul className="w-full text-2xl font-bold font-mono flex justify-evenly items-center">
                <li className="group flex justify-center items-center p-2 border-2 border-white hover:border-gray-200 rounded-full hover:shadow-md"><Link to="/"><img className="w-[60px] h-[60px] group-hover:text-white" src={animeLogo} alt="" /></Link></li>
                <li className="flex justify-center items-center p-2 border-2 border-white hover:border-gray-200  rounded-full hover:shadow-md"><Link to="/manga"><img className="w-[55px] h-[55px] group-hover:text-white" src={mangaLogo} alt="" /></Link></li>
                <li className="flex justify-center items-center p-2 border-2 border-white hover:border-gray-200  rounded-full hover:shadow-md"><Link to="/news"><img className="w-[60px] h-[60px] group-hover:text-white" src={newsLogo} alt="" /></Link></li>
                <li className="flex justify-center items-center p-2 border-2 border-white hover:border-gray-200  rounded-full hover:shadow-md"><Link to="/character"><img className="w-[50px] h-[50px] group-hover:text-white" src={characterLogo} alt="" /></Link></li>
                <li className="flex justify-center items-center p-2 border-2 border-white hover:border-gray-200 rounded-full hover:shadow-md"><Link to="/trailers"><img className="w-[60px] h-[60px] group-hover:text-white" src={traileLogo} alt="" /></Link></li>
            </ul>
        </div>
    </nav>
   </header>
  )
}

export default Header
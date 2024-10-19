import { Link } from "react-router-dom"

const Header = () => {
  return (
   <header className="w-full h-[80px] bg-white fixed flex justify-center items-center ">
    <nav  className="w-full h-full rounded-xl shadow-lg p-5 container flex justify-between items-center flex-row">
        <div className="w-[20%] md:w-[50%]">
        <img src='https://myanimelist-data-extracter.onrender.com/logo.jpeg' alt="Logo" />
        </div>
        <div className="w-[80%] md:w-[50%] flex justify-center items-center">
            <ul className="w-full text-2xl font-bold font-mono flex justify-evenly items-center">
                <li className="flex justify-center items-center px-4 py-2 hover:bg-black hover:text-white rounded-full hover:shadow-md"><Link to="/anime">Anime</Link></li>
                <li className="flex justify-center items-center px-4 py-2 hover:bg-black hover:text-white rounded-full hover:shadow-md"><Link to="/manga">Manga</Link></li>
                <li className="flex justify-center items-center px-4 py-2 hover:bg-black hover:text-white rounded-full hover:shadow-md"><Link to="/news">News</Link></li>
                <li className="flex justify-center items-center px-4 py-2 hover:bg-black hover:text-white rounded-full hover:shadow-md"><Link to="/characters">Characters</Link></li>
            </ul>
        </div>
    </nav>
   </header>
  )
}

export default Header
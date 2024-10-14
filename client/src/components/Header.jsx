import { Link } from "react-router-dom"

const Header = () => {
  return (
   <header className="w-full h-[80px] bg-white fixed flex justify-center items-center ">
    <nav  className="w-full h-full rounded-xl shadow-lg p-5 container flex justify-center items-center flex-row">
        <div className="w-[50%]">
        <img src="" alt="Logo" />
        </div>
        <div className="w-[50%] flex justify-center items-center">
            <ul className="w-full text-2xl font-bold font-mono flex justify-evenly items-center">
                <li><Link to="/anime">Anime</Link></li>
                <li><Link to="/manga">Manga</Link></li>
                <li><Link to="/news">News</Link></li>
                <li></li>
            </ul>
        </div>
    </nav>
   </header>
  )
}

export default Header
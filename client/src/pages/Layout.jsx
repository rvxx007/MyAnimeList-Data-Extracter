import { Outlet } from "react-router-dom"
import Header from "../components/Header"


const Layout = ()=>{


return(<>

<main
className="min-w-screen min-h-screen mx-auto">
<Header/>
<br />
<br />
<br />
<br />
<main  className="w-full h-full container mx-auto px-2 ">
    <Outlet/>
</main >
</main>
</>)
}

export default Layout
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = ()=>{


return(<>

<main style={{border:"1px solid red"}}
className="w-full h-full min-w-[350px] mx-auto">
<Header/>
<main className="w-full container mx-auto px-2 mt-[6rem]">
    <Outlet/>
</main >
</main>
</>)
}

export default Layout
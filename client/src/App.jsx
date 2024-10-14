
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './pages/Layout'
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import News from './pages/News'
import NotFound from './pages/NotFound'


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      
      children:[
        {
          path: '/anime',
          element: <Anime/>
          
        },
        {
          path:'/manga',
          element:<Manga/>
        },
        {
          path:'/news',
          element: <News/>
        },
        {
          path:'*',
          element: <NotFound/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App


import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './pages/Layout'
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import News from './pages/News'
import NotFound from './pages/NotFound'
import NewsDetails from './pages/NewsDetails'
import Character from './pages/Character'
import SplashScreen from './pages/SplashScreen'
import { useEffect, useState } from 'react'
import NoIntenet from './pages/NoIntenet'
import Trailers from './pages/Trailers'

function App() {

  const [splashScreen, setSplashScreen] = useState(true);
  const [isOnline , setIsOnline] = useState(navigator.onLine);

  useEffect(()=>{
    setTimeout(()=>{
      setSplashScreen(false);
    },5000);

  },[isOnline])
  
  return ( isOnline===false?<NoIntenet/>:(splashScreen===false
    ?<BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Anime/>}/>
        <Route path='/manga' element={<Manga/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<NewsDetails/>}/>
        <Route path='/character' element={<Character/>}/>
        <Route path='/trailers' element={<Trailers/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>:<SplashScreen/>)
)
}

export default App

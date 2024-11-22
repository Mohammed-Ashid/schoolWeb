import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Ccarousel from './Components/Carousel'
import Announcements from './Components/Announcements'
import LatestNews from './Components/LatestNews'
import LatestEvents from './Components/LatestEvents'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
    <Ccarousel/>
    <div className='information'>
    <Announcements/>
    <LatestNews/>
    <LatestEvents/>
    </div>
    </>
  )
}

export default App

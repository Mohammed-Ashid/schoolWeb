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
    <div style={{display:'flex',gap:'10px',marginTop:'10px'}}>
    <Announcements/>
    <LatestNews/>
    <LatestEvents/>
    </div>
    </>
  )
}

export default App

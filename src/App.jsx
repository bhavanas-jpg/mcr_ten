
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
    <Route  path="/" element={<Home />}/>
    <Route  path="/explore" element={<Explore />}/>  
    </Routes>
    </>
  )
}

export default App

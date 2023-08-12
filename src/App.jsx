
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Departments from './pages/Departments'
import Products from './pages/Products'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
    <Route  path="/" element={<Dashboard />}/>
    <Route  path="/departments" element={<Departments />}/>  
    <Route path="/products" element={<Products />} />
    </Routes>
    </>
  )
}

export default App

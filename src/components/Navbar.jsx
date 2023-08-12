import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Link to="/"> Dashboard</Link>
    <Link to="/departments">Departments</Link>
    <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar
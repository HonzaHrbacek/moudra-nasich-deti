import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/"><h1>📔Moudra našich dětí😅</h1></Link>
      <div className="links">
        <Link to="/">Domů</Link>
        <Link to="/create">Nové moudro</Link>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar-container'>
      <div className="navbar-wrapper">
        <div className="logo">
          <h2>Bookies</h2>
        </div>
        <div className="nav-links">
        <NavLink to='/'>
          <div className='nav-link'>Home</div>
        </NavLink>
        
        <NavLink to={'/books'}>
          <div className='nav-link'>Books</div>
        </NavLink>
        
        <NavLink to={'/about'}>
          <div className='nav-link'>About</div>
        </NavLink>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
      <a className='navbar-brand' href='#'>React Router</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' /></button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mx-auto'>
          <NavLink exact className=' nav-item' to='/'>
            <li className='nav-link'> Home </li>
          </NavLink>
          <NavLink className=' nav-item' to='/about'>
            <li className='nav-link'> About </li>
          </NavLink>
          <NavLink className=' nav-item' to='/list'>
            <li className='nav-link'> List </li>
          </NavLink>
          <NavLink className=' nav-item' to='/add'>
            <li className='nav-link'> Add Data </li>
          </NavLink>
          <NavLink className=' nav-item' to='/contact'>
            <li className='nav-link'> Contact </li>
          </NavLink>

        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)

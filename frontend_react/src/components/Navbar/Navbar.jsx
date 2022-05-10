import React from 'react'
import './Navbar.scss'
import { images } from '../../constants/index'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo2} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
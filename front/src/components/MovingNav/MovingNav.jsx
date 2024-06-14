import React from 'react'
import styles from './MovingNav.module.css'
import grauLogo from '../../assets/smallLogo.svg';
import instagramLogo from "../../assets/INSTA1.svg"
import vimeoLogo from "../../assets/VIMEO9.svg"
import { NavLink } from 'react-router-dom';

const MovingNav = () => {
  return (
    <header className="bg-black shadow-xl fixed top-0 left-0 z-10 w-full h-16">
    <nav className="flex items-center justify-between md:px-10 py-2 md:py-4 px-12 py-4 h-full">
      <div className="flex items-center">
        <img src={grauLogo} alt="grauLogo" className="h-8 w-auto" />
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/justgrau_/?hl=es" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://vimeo.com/justgrau" target="_blank" rel="noopener noreferrer">
          <img src={vimeoLogo} alt="Vimeo" className="h-6 w-6" />
        </a>
      </div>
      <div className="flex items-center space-x-6">
      <NavLink 
          to="/" 
          className="text-[#E0DECD] hover:text-white transition duration-300"
            activeClassName={styles.activeLink}
        >
          WORKS
        </NavLink>
        <NavLink 
          to="/about" 
          className="text-[#E0DECD] hover:text-white transition duration-300"
          activeClassName={styles.activeLink}
        >
          ABOUT
        </NavLink>
      </div>
    </nav>
  </header>  )
}

export default MovingNav


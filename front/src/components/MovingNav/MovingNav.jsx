import React from 'react'
import styles from './MovingNav.module.css'
import grauLogo from '../../assets/smallLogo.svg';
import instagramLogo from "../../assets/insta2.svg"
import vimeoLogo from "../../assets/vimeo3.svg"
import { NavLink } from 'react-router-dom';

const MovingNav = () => {
  return (
    <div className={styles.navContainer}>
        <div className={styles.logoSection}>
            <img src={grauLogo} alt='grauLogo'></img>
        </div>
        <div className={styles.socialMedia}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram"/>
        </a>
        <a href="https://vimeo.com/pjasminoy?fbclid=PAAabD4az3zDFiOpjUFgeeupTHPGyEYonSRPCAryBqBzKITeq9S7jXQHP3oN4_aem_ATzVml59WoJzz7w7YFZJMP3QDmHxEyAiaOdj0rjOk5uXI_iCL2ebgSPy_KY88QApBMI" target="_blank" rel="noopener noreferrer">
          <img src={vimeoLogo} alt="Vimeo"/>
        </a>
      </div>
      <div className={styles.navLinks}>
      <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? styles.activeLink : styles.regularLink
          }
        >
          WORKS
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? styles.activeLink : styles.regularLink
          }
        >
          ABOUT
        </NavLink>
      </div>
    </div>
  )
}

export default MovingNav


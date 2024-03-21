import React from 'react'
import styles from './NavBar.module.css'
import { ReactSVG } from 'react-svg';
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
// 
const NavBar = () => {



  return (
    <div className={styles.navContainer}>
         <div className={styles.logoSection}>
        <ReactSVG src={reactLogo} />
        </div>
        <div className={styles.linkSection}>
            <span>ORIGINAL MUSIC</span>
            <span>MIXING</span>
            <span>SOUND DESIGN</span>
        </div>
    </div>
  )
}

export default NavBar;

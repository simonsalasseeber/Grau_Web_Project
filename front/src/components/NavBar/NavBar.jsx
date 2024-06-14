import React from 'react'
import styles from './NavBar.module.css'
import { ReactSVG } from 'react-svg';
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
// 
const NavBar = () => {



  return (
      <div className="pt-16 flex w-full h-auto items-center justify-center flex-wrap pt-1 pb-5 z-1">
        <div className="relative z-100 w-2/3 h-auto flex justify-center md: mx-auto md:py-8 px-90 ">
          <ReactSVG src={reactLogo} className="pt-16 h-4/5 w-11/12 text-[#E0DECD]" />
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

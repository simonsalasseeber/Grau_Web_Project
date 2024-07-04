import React from 'react'
import styles from './DownNav.module.css'
import { ReactSVG } from 'react-svg';
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
// 
const DownNav = () => {

  return (

    <nav className="flex flex-row md:flex-row items-center justify-between md:px-10 py-2 md:py-4 px-4 md:px-12 py-4 w-full font-monumental-extended-light">
    <div className="text-center md:text-left mb-2 md:mb-0 md:mr-8 text-xs md:text-base">
      <p className="mb-1 md:mb-0">IG @GRAU.MUSIC</p>
      <p>+44 637221427</p>
    </div>
    <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
    <div className="w-24 md:w-40 lg:w-48">
        <ReactSVG src={reactLogo} className="w-full h-full object-contain" />
      </div>
    </div>
    <div className="text-center md:text-right text-xs md:text-base">
      <p className="mb-1 md:mb-0">WWW.GRAU.COM</p>
      <p>GRAU@GMAIL.COM</p>
    </div>
  </nav>
  

    );
  
}

export default DownNav;

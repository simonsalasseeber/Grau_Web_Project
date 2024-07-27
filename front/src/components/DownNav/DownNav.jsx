import React from 'react'
import { ReactSVG } from 'react-svg';
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
// 
const DownNav = () => {

  return (

    <nav className="text-[#E0DECD] flex flex-col md:flex-row items-center justify-between md:px-10 py-2 md:py-4 px-4 md:px-12 py-4 w-full font-monumental-extended-light">
  <div className="flex flex-col items-center  md:items-start mb-4 md:mb-0 text-xs md:text-base">
    <a href="https://www.instagram.com/justgrau_/?hl=es" target="_blank" rel="noopener noreferrer">
      <p className="mb-1 md:mb-0 text-[#E0DECD]">ig @justgrau_</p>
    </a>
    <a href="https://wa.me/5491167997139" target="_blank" rel="noopener noreferrer" className="text-[#E0DECD] no-underline">
      <p>+54 9 11 67997139</p>
    </a>
      </div>
  <div className="flex justify-center items-center mb-4 md:mb-0">
    <div className="w-24 md:w-40 lg:w-48">
      <ReactSVG src={reactLogo} className="w-full h-full object-contain" />
    </div>
  </div>
  <div className="flex flex-col items-center md:items-end text-xs md:text-base">
    <p className="mb-1 md:mb-0">www.graumusic.com</p>
    <p>somosgraumusic@gmail.com</p>
  </div>
</nav>
  

    );
  
}

export default DownNav;

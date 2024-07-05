import React from 'react'
import styles from './NavBar.module.css'
import { ReactSVG } from 'react-svg';
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
// 
const NavBar = () => {



  return (


<div className="flex flex-col w-full h-auto items-center justify-between pt-16 pb-5 z-1">
<div className="relative z-100 w-full max-w-4xl h-auto flex justify-center mt-2 mb-0 px-4">
  <ReactSVG src={reactLogo} className="h-auto w-2/5 max-w-xl " />
</div>
<div className='flex grid-cols-3 space-evenly gap-3 items-end text-[#E0DECD] font-atle-haas-bold md:text-xs' >
    <p>ORIGINAL MUSIC</p>
    <p>MIXING</p>
    <p>SOUND DESIGN</p>
</div>
</div>


)

  
  
}

export default NavBar;

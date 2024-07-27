import React from 'react'
import { ReactSVG } from 'react-svg';
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
// 
const NavBar = () => {



  return (


<div className="flex flex-col w-full h-auto items-center justify-between pt-16 pb-5 z-1">
<div className="relative z-100 w-full max-w-4xl h-auto flex justify-center mt-2 mb-0 px-4">
  <ReactSVG src={reactLogo} className="h-auto w-3/5 max-w-xl " />
</div>
<div className="w-11/12 flex flex-row justify-between items-end px-4 md:px-8 lg:px-16">
      <span className="font-atle-haas-bold text-[#E0DECD] text-sm sm:text-base md:text-lg">ORIGINAL MUSIC</span>
      <span className="font-atle-haas-bold text-[#E0DECD] text-sm sm:text-base md:text-lg">MIXING</span>
      <span className="font-atle-haas-bold text-[#E0DECD] text-sm sm:text-base md:text-lg">SOUND DESIGN</span>
    </div>
</div>


)

  
  
}

export default NavBar;

import React from 'react';
import { useEffect, useState } from 'react';

import logo1 from '../../assets/banner-finals/Logo_Fila.svg';
import logo2 from '../../assets/banner-finals/Logo_CocaCola.svg';
import logo3 from '../../assets/banner-finals/Logo_Lollapalooza.svg';
import logo4 from '../../assets/banner-finals/Logo_Mini1.svg';
import logo5 from '../../assets/banner-finals/Logo_Netflix.svg';
import logo6 from '../../assets/banner-finals/Logo_Pacifico.svg';
import logo7 from '../../assets/banner-finals/Logo_Spotify.svg';
import logo8 from '../../assets/banner-finals/Logo_United.svg';
import logo9 from  '../../assets/banner-finals/Logo_Adidas.svg';



const LogoCarousel = () => {
    const [position, setPosition] = useState(0);
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

    useEffect(() => {
        let animationId;
        
        const animate = () => {
          setPosition((prevPosition) => (prevPosition - 0.5) % (logos.length * 200));
          animationId = setTimeout(() => requestAnimationFrame(animate), 16);
        };
        
        requestAnimationFrame(animate);
        
        return () => {
          clearTimeout(animationId);
          cancelAnimationFrame(animationId);
        };
      }, []);
  
    return (
      <div className="overflow-hidden w-full" style={{ 
        borderTop: '0.1em solid white', 
        borderBottom: '0.1em solid white', 
        marginTop: '5%', 
        marginBottom: '5%'
      }}>
        <div 
          className="flex"
          style={{ 
            transform: `translateX(${position}px)`,
            width: `${logos.length * 150 * 2}px`
          }}
        >
      {[...logos, ...logos].map((logo, index) => ( 
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 sm:h-20 md:h-24 lg:h-32 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
            style={{ 
              minWidth: '100px',
              maxWidth: '150px',
              width: '100%',
              objectFit: 'contain'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
import React, {useState} from 'react';
import styles from './SecProjectsCard.module.css';

const PlayIcon = () => (
  <svg fill="white" height="10%" width="10%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 512 512" xmlSpace="preserve">
<g>
 <g>
   <path d="M500.203,236.907L30.869,2.24c-6.613-3.285-14.443-2.944-20.736,0.939C3.84,7.083,0,13.931,0,21.333v469.333
     c0,7.403,3.84,14.251,10.133,18.155c3.413,2.112,7.296,3.179,11.2,3.179c3.264,0,6.528-0.747,9.536-2.24l469.333-234.667
     C507.435,271.467,512,264.085,512,256S507.435,240.533,500.203,236.907z"/>
 </g>
</g>
</svg>
 );

const SecProjectsCard = ({video, title, producer, image}) => {

  const [showVideoPreview, setShowVideoPreview] = useState(false);

  const toggleVideoPreview = () => {
      setShowVideoPreview(!showVideoPreview);
  };

  return (


      <div className="w-full p-4 sm:p-2 box-border flex flex-col items-center relative">
      <div className="image-container position-relative mx-6 md:mx-6 lg:mx-8">
  
         <img
           src={image}
           alt={title}
           className={styles.grid}
         />
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/6 -translate-y-1/2 cursor-pointer z-2 text-[#E0DECD]" onClick={toggleVideoPreview}>
            <PlayIcon className="fill-current w-1/10" />
          </div>
         <div className={styles.textContainer}>
           <h4 class="text-left m-0 flex-grow font-monumental-extended-black text-[#E0DECD]">{title}</h4>
           <p class="text-right m-0 whitespace-nowrap font-monumental-extended-regular text-[#E0DECD]">{producer}</p>
         </div>
       </div>
       {showVideoPreview && (
         <div className={styles.videoOverlay}>
           <div className={styles.videoPlayer}>
             <iframe
               className={styles.videopreview}
               src={video}
               allow="autoplay; encrypted-media"
               allowFullScreen
             ></iframe>
             <button className={styles.closeButton} onClick={toggleVideoPreview}>Close</button>
           </div>
         </div>
       )}
    </div>
   );
};

export default SecProjectsCard;
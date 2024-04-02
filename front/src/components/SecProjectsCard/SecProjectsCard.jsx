import React, {useState} from 'react';
import styles from './SecProjectsCard.module.css';

const PlayIcon = () => (
  <svg width="30%" height="30%" viewBox="0 0 24 24" fill="#E0DECD" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="#1C274C" stroke-width="1.5"/>
  </svg>
 );

const SecProjectsCard = ({video, title, producer, image}) => {

  const [showVideoPreview, setShowVideoPreview] = useState(false);

  const toggleVideoPreview = () => {
      setShowVideoPreview(!showVideoPreview);
  };

  return (
    <div className={styles.secProjectCard}>
       <div className={styles.imageContainer}>
         <img
           src={image}
           alt={title}
           className={styles.grid}
         />
         <div className={styles.playIcon} onClick={toggleVideoPreview}>
            <PlayIcon className={styles.playI} />
         </div>
         <div className={styles.textContainer}>
           <h4 className={styles.videoTitle}>{title}</h4>
           <p className={styles.videoProducer}>{producer}</p>
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
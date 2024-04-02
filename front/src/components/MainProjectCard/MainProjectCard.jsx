import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './MainProjectCard.module.css'


const MainProjectCard = ({video, title, producer, image}) => {

  const [showVideoPreview, setShowVideoPreview] = useState(false);

  const toggleVideoPreview = () => {
      setShowVideoPreview(!showVideoPreview);
  };

  return (
    <div className="image-container position-relative">
       <img src={image} className="card-img-top" alt={title} />
       <div className={styles.playIcon} onClick={toggleVideoPreview}>
            <PlayIcon className={styles.playI} />
         </div>
       <div className="card-body">
         {/* Video preview */}
         {showVideoPreview && (
           <div className={styles.videoOverlay}>
             <div className={styles.videoPlayer}>
               <iframe
                 className={styles.videopreview}
                 title="video-preview"
                 src={video}
                 allow="autoplay; encrypted-media"
                 allowFullScreen
               />
               <button className={styles.closeButton} onClick={toggleVideoPreview}>Close</button>
             </div>
           </div>
         )}
       </div>
    </div>
   );
   
            };

const PlayIcon = () => (
  <svg width="30%" height="30%" viewBox="0 0 24 24" fill="#E0DECD" xmlns="http://www.w3.org/2000/svg">
     <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="#1C274C" stroke-width="1.5"/>
  </svg>
 );

export default MainProjectCard;
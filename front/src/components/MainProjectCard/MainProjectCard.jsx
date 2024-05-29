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
  <svg fill="white" height="10%" width="10%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 512 512" xml:space="preserve">
<g>
 <g>
   <path d="M500.203,236.907L30.869,2.24c-6.613-3.285-14.443-2.944-20.736,0.939C3.84,7.083,0,13.931,0,21.333v469.333
     c0,7.403,3.84,14.251,10.133,18.155c3.413,2.112,7.296,3.179,11.2,3.179c3.264,0,6.528-0.747,9.536-2.24l469.333-234.667
     C507.435,271.467,512,264.085,512,256S507.435,240.533,500.203,236.907z"/>
 </g>
</g>
</svg>
 );

export default MainProjectCard;
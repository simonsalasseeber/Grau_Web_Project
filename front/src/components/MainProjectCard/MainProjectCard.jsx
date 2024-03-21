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
        <img src={image} className="card-img-top" onClick={toggleVideoPreview} alt={title} />
        <div className="card-body">
          
                        {/* Video preview */}
            {showVideoPreview && (
                <div >
                    <iframe
                    className={styles.videopreview}
                        title="video-preview"
                        src={video}
                        
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    </div>
);
            };

export default MainProjectCard;
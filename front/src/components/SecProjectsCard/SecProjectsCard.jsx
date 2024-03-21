import React, {useState} from 'react';
import styles from './SecProjectsCard.module.css';



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
          onClick={toggleVideoPreview}
          alt={title}
          className={styles.grid}
        />
        <div className={styles.textContainer}>
        <h4 className={styles.videoTitle}>{title}</h4>
            <p className={styles.videoProducer}>{producer}</p>
        </div>
            

      </div>
      {showVideoPreview && (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videopreview}
            src={video}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
      
    </div>
  );
};

export default SecProjectsCard;
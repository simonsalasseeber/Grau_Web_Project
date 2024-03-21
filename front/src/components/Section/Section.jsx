import React from 'react'
import styles from './Section.module.css';

const Section = ({imageSrc, altText, alt, text1, text2, text3, text4, text5, text6, secondImg}) => {
  return (
    <div className="col">
     {imageSrc && <img src={imageSrc} alt={altText || "Division Image"} className="img-fluid" />}
      <div className={styles.bold}>
      {text1 && <h3 className={styles.texttop}>{text1}</h3>}
      {text2 && <h3 className={styles.textbottom}>{text2}</h3>}
      
      <div  className={styles.info}>
          {text5 && <h5>{text5}</h5>}
          {text6 && <h5>{text6}</h5>}
        </div>
      </div>
      <div className={styles.MonoLight}>
      {text3 && <p className={styles.texttop}>{text3}</p>}
      {text4 && <p className={styles.textbottom} >{text4}</p>}
      {secondImg && <img src={secondImg} alt={alt || "Logo image"} className="img-fluid" />}
      </div>
      
    </div>
  )
}

export default Section
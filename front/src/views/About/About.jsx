import React from 'react'
import tomi from '../../assets/tomi.jpeg';
import gris from '../../assets/gris.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from "./About.module.css";
import MovingNav from '../../components/MovingNav/MovingNav';


const About = () => {
  return (
    <>
    <MovingNav />
    <div className={styles.container}>
        <div className={styles.mainP}>
          <h1>Boutique sound crafting. From Argentina, with love. </h1>
        </div>
        <div className={styles.row}>
            <img src={gris} className={styles.grisLogo}/>
            <div className={styles.textP}>Pedro Jasminoy</div>
            <div className={styles.paragraphG}>We specialize in music production,  sound design and audio post-production for advertising, short and feature films. </div>
  
        </div>
        <div className={styles.row}>
            <div className={styles.paragraphT}>Our mission is to carefully craft a sonic world and identity.</div>
            <div className={styles.textT}>Tomás Iglesias</div>
            <img src={tomi} className={styles.tomiLogo}/>

        </div>
    </div>
  </>
  )
}

export default About
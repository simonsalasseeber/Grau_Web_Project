import React from 'react'
import styles from './DownNav.module.css'
import { ReactSVG } from 'react-svg';
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
// 
const DownNav = () => {

  return (
    <div className={styles.navContainer}>
         
        <div className={styles.words}>
            <h5>IG @GRAU.MUSIC</h5>
            <h5>+44 637221427</h5>
        </div>
        <div className={styles.logoSection}>
        <ReactSVG src={reactLogo} />
        </div>
        <div className={styles.words}>
            <h5>WWW.GRAU.COM</h5>
            <h5>GRAU@GMAIL.COM</h5>
        </div>
    </div>
  )
}

export default DownNav;

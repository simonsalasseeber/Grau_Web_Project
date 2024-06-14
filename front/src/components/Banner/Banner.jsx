import React from 'react'
import banner from "../../assets/banner_f.png"

import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className='flex flex-col ' style={{ borderTop: '0.1em solid white', borderBottom: '0.1em solid white', marginTop: '5%'}}>
      <img src={banner} alt="banner" className={styles.logo}></img>
    </div>
  )
}

export default Banner
import React from 'react'
import adidas from "../../assets/adidas2.svg"
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.logo}>
        <img src={adidas} alt='adidas'></img>
    </div>
  )
}

export default Banner
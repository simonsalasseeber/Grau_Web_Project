import React from 'react'
import adidas from "../../assets/brands/adidas2.svg"
import coca from "../../assets/brands/coca-cola.svg"
import mini from "../../assets/brands/mini.svg"
import united from "../../assets/brands/united.svg"
import netflix from "../../assets/brands/netflix.svg"

import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={adidas} alt='adidas'></img>
        <img src={coca} alt='coca'></img>
        <img src={mini} alt='mini'></img>
        <img src={united} alt='united'></img>
        <img src={netflix} alt='netflix'></img>
      </div>
      
        
    </div>
  )
}

export default Banner
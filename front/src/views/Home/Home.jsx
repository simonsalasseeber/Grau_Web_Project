import React from 'react';
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'
import MainProject from '../../components/MainProject/MainProject'
import SecProjects from '../../components/SecProjects/SecProjects'
import DownNav from '../../components/DownNav/DownNav'
import Banner from '../../components/Banner/Banner';
const Home = () => {


  return (
    <div className={styles.homeContainer}>
        <NavBar />
        <MainProject/>
        <Banner />
        <SecProjects/>
        <DownNav />
    </div>
  )
}

export default Home
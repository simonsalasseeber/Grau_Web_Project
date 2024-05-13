import React, {lazy, Suspense } from 'react';
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'
// import MainProject from '../../components/MainProject/MainProject'
// import SecProjects from '../../components/SecProjects/SecProjects'
import DownNav from '../../components/DownNav/DownNav'
import Banner from '../../components/Banner/Banner';
import MovingNav from '../../components/MovingNav/MovingNav';

const MainProject=lazy(() => import('../../components/MainProject/MainProject'));
const SecProjects=lazy(() => import('../../components/SecProjects/SecProjects'));

const Home = () => {


  return (
    <div className={styles.homeContainer}>
    <Suspense fallback={<img src="../../assets/LogoGrau_Vectorial_1.svg" alt="Logo" />}>
        <MovingNav />
        <NavBar />
        <MainProject/>
        <Banner />
        <SecProjects/>
        <DownNav />
        </Suspense>
    </div>
  )
}

export default Home
import React, {lazy, Suspense} from 'react';
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'
import DownNav from '../../components/DownNav/DownNav'
import Banner from '../../components/Banner/Banner';
import MovingNav from '../../components/MovingNav/MovingNav';
import MainProject from '../../components/MainProject/MainProject';
import SecProjects from '../../components/SecProjects/SecProjects';
const Loading = lazy(() => import('./Loading'));


const Home = () => {


  return (
    <div className={styles.homeContainer}>
        <MovingNav />
        <NavBar />
        <Suspense fallback={<Loading />}>
        <MainProject/>
        </Suspense>
        <Banner />
        <Suspense fallback={<Loading />}>
        <SecProjects/>
        </Suspense>
        <DownNav />
    </div>
  )
}

export default Home
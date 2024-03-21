import React from 'react'
import Section from '../../components/Section/Section'
import reactLogo from '../../assets/LogoGrau_Vectorial_1.svg';
import test from '../../assets/test.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from "./About.module.css";
import MovingNav from '../../components/MovingNav/MovingNav';


const About = () => {
  return (
    <>
    <MovingNav />
    <div className={styles.container}>
        <div >
            <h1>Be pretty sure that the whole universe will listen closely to each track. The stars, the sun, the Earth; there will be no sound they do not hear, no song they do not sing, no party they do not dance. Will you join us?</h1>
        </div>
      <div className="row">
        <Section imageSrc={test} altText="Descriptive Alt Text" />
        <Section text1="ABOUT US" text2="STRATEGY & DESIGN" text5="+44 637221427" text6="grau@gmail.com"/>
        <Section text3="Be pretty sure that the whole universe will listen closely to each track. The stars, the sun, the Earth; there will be no sound they do not hear, no song they do not sing, no party they do not dance. Will you join " text4="Be pretty sure that the whole universe will listen closely to each track. The stars, the sun, the Earth; there will be no sound they do not hear, no song they do not sing, no party they do not dance. Will you join " secondImg={reactLogo} alt="Grau Logo" />
      </div>
    </div>
  </>
  )
}

export default About
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'; 
import MovingNav from '../../components/MovingNav/MovingNav';


const About = () => {
  return (
    <>
    <MovingNav />
    <div className="bg-black text-[#E0DECD] p-8 min-h-screen flex flex-col justify-center font-monumental-light md:mt-12">
        
        <div className="mt-12 md:mt-2 grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
          <div>
            <h2 className="text-xl font-bold mb-4 font-monumental-extended-regular">GRAU: Crafting Sonic Universes</h2>
            <p className="mb-4 font-monumental-extended-light">At GRAU, we don't just create music—we craft art. We design immersive soundscapes, where every piece is a carefully curated journey into a universe of sonic excellence. Unlike traditional music houses that churn out generic tracks, our mission is to elevate audio-visual content by infusing it with a distinct, cinematic touch.</p>
            <h3 className="text-lg font-semibold mb-2 font-monumental-extended-regular">Who we are</h3>
            <p className='font-monumental-extended-light'>Our team of composers and sound designers, with over 10 years + of experience in the music industry and with a classical music background, bring a depth of knowledge, fresh perspective and sophistication to every project. We've seen firsthand how broken the traditional industry can be, and we've set out to redefine it. By merging our extensive experience with a fresh, modern approach, we consistently raise the bar in</p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 font-monumental-extended-regular">Collaborative and Distinctive</h2>
            <p className="mb-4 font-monumental-extended-light">When you choose GRAU, you're not just getting a service—you're partnering with a team that's as passionate about your project as you are. We work closely with directors, producers, and companies to develop a sonic identity that's uniquely yours.</p>
            <h3 className="text-lg font-semibold mb-2 font-monumental-extended-regular">Elevate Your Project</h3>
            <p className="mb-4 font-monumental-extended-light">We want your project to stand out. Collaborating with us elevates both of us because we work with the best, and the best work with us. Together, we push creative boundaries to new heights.</p>
            <h3 className="text-lg font-semibold mb-2 font-monumental-extended-regular">GRAU recs are unique</h3>
            <p className='font-monumental-extended-light'>Our tracks are not just background music—they're carefully crafted pieces that enhance the narrative and emotion of your content. Every note, every beat, and every sound is designed to elevate your project to a level that's both artistic and impactful.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 font-monumental-extended-regular">Bold and Modern</h2>
            <p className="mb-4 font-monumental-extended-light">Our approach is anything but conventional. We're bold, we're modern, and we're always pushing the envelope to create something extraordinary. With GRAU, you're not just getting music; you're getting a partner dedicated to making your vision come alive in the most compelling way possible.</p>
            <h3 className="text-lg font-semibold mb-2 font-monumental-extended-regular">Join Us</h3>
            <p className='font-monumental-extended-light'>Let's create something amazing together. Whether you're an established company or an up-and-coming director, GRAU is here to help you develop a unique sonic universe that resonates. Trust in our expertise, embrace the collaboration, and watch as we transform your project with our unparalleled musical artistry.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xl font-bold mb-4 font-monumental-extended-black">BE A PART OF THE GRAU MOVEMENT. LET'S CREATE THE UNFORGOTTABLE</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center font-monumental-extended-light">
              <div className="text-center">
                <p>PEDRO JASMINOY</p>
                <p>TOMÁS IGLESIAS</p>
              </div>
              <div className="text-center">
              <a href="https://wa.me/5491167997139" target="_blank" rel="noopener noreferrer" className="text-[#E0DECD] no-underline">
                <p>+5491167997139</p>
              </a>
              <a href="https://wa.me/5491131270907" target="_blank" rel="noopener noreferrer" className="text-[#E0DECD] no-underline">
                <p>+5491131270907</p>
                </a>
              </div>
              <div className="text-center">
                <p>PEDROJASMINOY@GMAIL.COM</p>
                <p>TOMMYIGLESIAS@HOTMAIL.COM</p>
              </div>
            </div>

        </div>
      </div>
  </>
  )
}

export default About
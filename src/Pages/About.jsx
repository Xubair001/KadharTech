import React from 'react';
import Common from './Common';
import BrandImage from '../Images/work.avif';


const About = () => {
  return (
    <>
        <Common h1="Welcome to"
            Strong="Kadhar Tech."
            h2="Web Design, your gateway to creative and innovative web solutions. As a passionate web designer, We're dedicated to bringing your digital vision to life."
            visit="/contact"
            btn="Contact Us"
            img={BrandImage}
    />
    </>
  )
}

export default About
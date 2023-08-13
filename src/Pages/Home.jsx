import React from 'react';
import Common from './Common';
import BrandImage from '../Images/Brand.avif';


const Home = () => {
  return (
    <>
    <Common h1="Grow your business with"
            Strong="Abdullah Zubair"
            h2="We have the team of talented developer making websites"
            visit="/service"
            img={BrandImage}
            btn="Get Started"
    />
        
    </>
  )
}

export default Home;
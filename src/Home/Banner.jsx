import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Banner = () => {
  return (
    <div className="banner-container ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        emulateTouch
        stopOnHover
      >
        <div className="h-[500px] backgroundImgOne  flex items-center justify-center text-white text-center p-10">
          
          <div className="">
            <h2 className="text-4xl font-bold mb-4">Explore Visa Requirements</h2>
            <p className="text-lg">Check visa requirements for any country with our easy-to-use tool.</p>
          </div>
        </div>


        <div className="h-[500px] backgroundImgTwo flex items-center justify-center text-white text-center p-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Apply for Visas Online</h2>
            <p className="text-lg">Submit your visa applications online in a few simple steps.</p>
          </div>
        </div>
        <div className="h-[500px] backgroundImgThree flex items-center justify-center text-white text-center p-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Track Your Application</h2>
            <p className="text-lg">Stay updated on your visa application status in real-time.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

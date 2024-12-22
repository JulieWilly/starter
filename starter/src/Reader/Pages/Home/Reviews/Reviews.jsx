import React from 'react'
import TopNavigation from '../../../Components/TopNavigation'
// import Image from '../../../Components/Image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
  return (
    <div className=" p-8">
      <TopNavigation sectName={"Reviews"} isSet={"false"} />
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        className=" h-full w-full  grif place-content-center"
      >
        <div className="  flex items-center justify-center h-full">
          <ReviewsCard />
        </div>
        <div className="flex items-center justify-center">
          <ReviewsCard />
        </div>
        <div className=" flex items-center justify-center">
          <ReviewsCard />
        </div>
      </Carousel>
    </div>
  );
}

export default Reviews
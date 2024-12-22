
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousell = () => { 

        return (
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            className=" h-full w-full  grif place-content-center"
          >
            <div className="  flex items-center justify-center h-full">
              <span className="text-[8rem]"> 🚀</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[8rem]"> 💹</span>
            </div>
            <div className=" flex items-center justify-center">
    
              <span className="text-[8rem]">💲</span>
            </div>
          </Carousel>
        );
    }


    export default Carousell;
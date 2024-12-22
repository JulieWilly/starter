
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousell = () => { 

        return (
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            className="border-black border-2 h-full w-full"
          >
            <div className="w-40 h-40 border-2 border-black flex items-center justify-center">
              {/* <img
                className="object-cover w-full h-full "
                src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              /> */}
              <span className="text-[8rem]"> 🚀</span>
            </div>
            <div className="w-40 h-40 border-2 border-black flex items-center justify-center">
              {/* <img
                className="object-cover w-full h-full "
                src="https://images.pexels.com/photos/22669491/pexels-photo-22669491/free-photo-of-traditional-yellow-lanterns-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              /> */}
              <span className="text-[8rem]"> 💹</span>
            </div>
            <div className="w-40 h-40 border-2 border-black flex items-center justify-center">
              {/* <img
                className="object-cover w-full h-full "
                src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              /> */}

              <span className="text-[8rem]">💲</span>
            </div>
          </Carousel>
        );
    }


    export default Carousell;
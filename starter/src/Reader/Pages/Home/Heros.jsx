import Carousell from "../../Components/Carousel";
import SubscribeInput from "../../Components/SubscribeInput";

const Heros = () => {
  

  return (
    <div className="  w-full h-[25rem] flex flex-row gap-4 items-center">
      <div className="mt-10 ml-20  w-full flex items-center  flex-col  ">
        <h1 className="text-[4rem] text-black leading-16 capitalize text-center  ">
          Learn create and grow your <br /> business with{" "}
          <span>Stater blogs</span>
        </h1>
        <p className="mt-8 text-xl font-ligth text-black text-center">
          Turn your idea into a blog in minutes. Then take it further with
          flexible, <br /> intuitive tools designed to help you grow.
        </p>
        <div className=" mt-8 w-max">
          <SubscribeInput />
        </div>
      </div>
      {/* <div className=" h-full  w-1/2 flex items-center justify-center ">
        <Carousell />
      </div> */}
    </div>
  );
}

export default Heros
import SubscribeInput from "../../Components/SubscribeInput";

const Heros = () => {
  return (
    <div className="  w-full h-[25rem]  relative ">
      <div className="mt-20 ml-20  ">
        <h1 className="text-5xl text-black leading-16 capitalize  ">
          Learn create and grow your <br /> business with{" "}
          <span>Stater blogs</span>
        </h1>
        <p className="mt-8 text-xl font-ligth text-black">
          Turn your idea into a blog in minutes. Then take it further with
          flexible, <br /> intuitive tools designed to help you grow.
        </p>
        <div className=" mt-8 absolute">
          <SubscribeInput />
        </div>
      </div>  
    </div>
  );
}

export default Heros
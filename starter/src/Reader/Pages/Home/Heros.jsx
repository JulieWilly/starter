import SubscribeInput from "../../Components/SubscribeInput";

const Heros = () => {
  return (
    <div className="  w-full h-full  relative ">
      <div className="h-[35rem] w-full relative border border-fuchsia-50 ">
        <img
          className="w-full h-full object-cover  absolute mix-blend-overlay "
          src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="mt-36 ml-20  ">
          <h1 className="text-5xl text-white leading-16 capitalize  ">
            Learn create and grow your <br /> business with{" "}
            <span>Stater blogs</span>
          </h1>
          <p className="mt-8 text-xl font-ligth text-slate-300">
            Turn your idea into a blog in minutes. Then take it further with
            flexible, <br /> intuitive tools designed to help you grow.
          </p>
          <div className=" mt-8 absolute">
            <SubscribeInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros
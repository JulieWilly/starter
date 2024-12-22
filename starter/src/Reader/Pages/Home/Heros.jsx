import Carousell from "../../Components/Carousel";
import SubscribeInput from "../../Components/SubscribeInput";
import JSConfetti from "js-confetti";

const Heros = () => {
  
const jsConfetti = new JSConfetti();

const icons = () => {
  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
  });
}
  return (
    <div className="  w-full h-[25rem] flex flex-row gap-4 items-center">
      <div className="mt-10 ml-20  ">
        <h1 className="text-5xl text-black leading-16 capitalize  ">
          Learn create and grow your <br /> business with{" "}
          <span>Stater blogs</span>
        </h1>
        <p className="mt-8 text-xl font-ligth text-black">
          Turn your idea into a blog in minutes. Then take it further with
          flexible, <br /> intuitive tools designed to help you grow.
        </p>
        <div className=" mt-8 w-max">
          <SubscribeInput />
        </div>
      </div>
      <div className=" h-full w-1/2">
        {/* <span className="text-3xl">💹</span>
        <span className="text-3xl">💲</span>
        <span className="text-3xl">🚀</span>
        <span className="text-3xl"> 💸</span>
        <span className="text-3xl">💵</span>
        <button onClick={icons}>Click me</button> */}
        <Carousell />
      </div>
    </div>
  );
}

export default Heros
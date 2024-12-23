import { GrNext } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbArrowGuide } from "react-icons/tb";
import { FaHeadSideVirus } from "react-icons/fa6";
import { Link } from "react-router";
const ideas = [
  {
    id: 1,
    title: "How to",
    desc: "A long story that I would like to share generations to come and have more listeners.",
    icons: <FaRegCircleQuestion />,
    next: <GrNext />,
  },
  {
    id: 2,
    title: "Ideas",
    desc: "A long story that I would like to share generations to come and have more listeners.",
    icons: <FaHeadSideVirus />,
    next:<GrNext />,
  },
  {
    id: 3,
    title: "Guide",
    desc: "A long story that I would like to share generations to come and have more listeners.",
    icons: <TbArrowGuide />,
    next: <GrNext />,
  },
];


const Ideas = () => {
  return (
    <div className="border-2 border-black p-4 flex flex-col items-center w-full">
      <div className="flex items-center flex-col">
        <h1 className="text-4xl tracking-wide font-bold text-[3rem] text-center">
          Discover your potential.
        </h1>
        <h1 className="text-xl tracking-wide font-light mt-2 w-3/4  text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit minus
          sed dolorum ipsa nemo sunt veniam tempore? Nemo, itaque eum?
        </h1>
      </div>
      <div className=" w-full p-8  flex items-center gap-8 flex-col">
        {ideas.map((howTo) => (
          <div
            key={howTo.id}
            className="flex flex-row gap-2 items-center border-b-2 border-green-800 w-3/4  p-2 "
          >
            <span className="text-[2rem] font-bold  grid place-content-center ">
              {howTo.icons}
            </span>
            <div className=" flex flex-row items-center justify-between w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-wide ">
                  {howTo.title}
                </h1>
                <h1>{howTo.desc}</h1>
              </div>{" "}
              <div className="flex items-center gap-2">
                <Link to={'/'}>Explore</Link>
                <span className=" font-bold">{howTo.next}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;

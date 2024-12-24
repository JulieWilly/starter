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
    next: <GrNext />,
  },
  {
    id: 3,
    title: "Guide",
    desc: "A long story that I would like to share generations to come and have more listeners.",
    icons: <TbArrowGuide />,
    next: <GrNext />,
  },
  {
    id: 4,
    title: "Resources",
    desc: "A long story that I would like to share generations to come and have more listeners.",
    icons: <TbArrowGuide />,
    next: <GrNext />,
  },
  {
    id: 5,
    title: "Case Studies",
    desc: "A long story that I would like to share generations to come and have more listeners.",
    icons: <TbArrowGuide />,
    next: <GrNext />,
  },
  {
    id: 6,
    title: "Reviews",
    desc: "A long story that I would like to share generations to come and have more listeners.",
    icons: <TbArrowGuide />,
    next: <GrNext />,
  },
];

const Ideas = () => {
  return (
    <div className="flex items-center flex-col">
      <div>
        <h1 className="p-2 text-2xl font-bold text-[#1B4942]">
          Elevate your business to a higher new level
        </h1>
      </div>
      <div className="p-8 flex flex-row justify-around  flex-wrap gap-4">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="flex p-8 rounded-lg w-[19rem]  gap-4 hover:bg-[#F1F7F7] shadow-lg"
          >
            <div>
              <span className="text-4xl text-blue-500 ">{idea.icons}</span>
            </div>
            <div>
              {" "}
              <div className=" ">
                <h1 className="text-3xl font-bold  tracking-wide ">
                  {idea.title}
                </h1>
                <h1 className="text-lg tracking-wide  mt-2">{idea.desc}</h1>
              </div>
              <div className="flex flex-row items-center hover:underline   mt-4 ">
                <span className="text-lg   text-blue-500 hover:text-blue-300 cursor-pointer">
                  Learn more
                </span>
                <span className="text-sm   text-blue-500 hover:text-blue-300">
                  {idea.next}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;

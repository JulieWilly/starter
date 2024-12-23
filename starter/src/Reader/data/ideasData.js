import { GrNext } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbArrowGuide } from "react-icons/tb";
import { FaHeadSideVirus } from "react-icons/fa6";
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

export default ideas;

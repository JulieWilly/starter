import {  Link, NavLink, useNavigate } from "react-router";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
const navigatioins = [
  { id: 1, name: "Start", path:'/start' },
  { id: 2, name: "Grow", path:'/grow'},
  { id: 3, name: "Monetize", path:'/monetize' },
  { id: 4, name: "Topics", path:'/topics' },
];
const Navigation = () => {
const redirectTo = useNavigate();
    // navigate to sign in page.
    const toSignIn = () => {
redirectTo('/sign-in');
    }

      
  return (
    <>
      <div className="flex items-center justify-around p-4 flex-row w-full    ">
        <Link to={"/"}>
          <h1 className="text-3xl  font-bold text-black hover:text-[#646464]">
            Starter
          </h1>
        </Link>

        <nav>
          <ul className="flex items-center justify-between flex-row gap-4  ">
            <li>
             {
              navigatioins.map((name,) => (
                 <NavLink
                 key={name.id}
                to={name.path}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className={"hover:border-b-2 border-black  p-1 "}
              >
                <span className=" text-black text-lg tracking-wide"> {name.name}</span>
              </NavLink>
              ))
             }
            </li>
         
          </ul>
        </nav>
        <div className=" flex flex-row items-center">
          <input
            type="text"
            placeholder="Search blog..."
            className=" border-b-2 border-black mr-4 ps-1 focus:border-b-2 focus:outline-none "
          />
          <CiSearch className="text-2xl cursor-pointer mr-4" />

          <div className="flex gap-2">
            <button
              className="hover:scale-95 hover:transition-all  text-black pr-2 pl-2 pt-1 pb-1 w-24 rounded border border-[#1B4942] hover:bg-[#1B4942] hover:border-none hover:text-white  "
              onClick={toSignIn}
            >
              Login
            </button>
            <button
              className="bg-[#1B4942] text-white pr-2 pl-2 pt-2 pb-2  rounded  hover:scale-95 hover:transition-all "
              onClick={toSignIn}
            >
              Start for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation
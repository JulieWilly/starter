import {  Link, NavLink, useNavigate } from "react-router";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navigation = () => {
const redirectTo = useNavigate();
    // navigate to sign in page.
    const toSignIn = () => {
redirectTo('/sign-in');
    }
  return (
    <>
      <div className="flex items-center justify-around p-4 flex-row w-full border-b-2 border-black">
        <Link to={"/"}>
          <h1 className="text-3xl  font-bold text-black">Starter</h1>
        </Link>

        <nav>
          <ul className="flex items-center justify-between flex-row gap-2  ">
            <li>
              <NavLink
                to="/start"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className={"hover:border-b-2 border-black  p-1 "}
              >
                <span className=" text-black text-lg"> Start</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/grow"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className={"hover:border-b-2 border-black  p-1 "}
              >
                <span className=" text-black text-lg"> Grow</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/monetize"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className={"hover:border-b-2  border-black   p-1 "}
              >
                <span className=" text-black text-lg"> Monetize</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topics"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className={
                  "hover:border-b-1 border-black p-1 flex items-center flex-row "
                }
              >
                <span className=" text-black text-lg"> Topics</span>
                <MdNavigateNext className="text-2xl  text-black rotate-90" />
              </NavLink>
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
              className="text-black pr-2 pl-2 pt-1 pb-1 w-24 rounded border-2 border-black hover:bg-black hover:text-white  "
              onClick={toSignIn}
            >
            Login
            </button>
            <button
              className="bg-black text-white pr-2 pl-2 pt-1 pb-1  rounded hover: bg-blue-300 "
              onClick={toSignIn}
            >
Register for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation
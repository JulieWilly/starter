import {  Link, NavLink } from "react-router";


const Navigation = () => {

    // navigate to sign in page.
    
  return (
    <>
      <div className="flex items-center justify-between p-2 flex-row border-2 border-black bg-[#183350]">
        <Link to={"/"}>
          <h1 className="text-3xl  font-bold text-white">Starter</h1>
        </Link>

        <div>
          <nav>
            <ul className="flex items-center justify-between p-4 mr-4  flex-row gap-10 ">
              <li className="text-white">
                <NavLink
                  to="/create-blog"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                  })}
                  className={"hover:border-b-2   p-1 "}
                >
                  <span className=" text-white text-xl"> Create Blog</span>
                </NavLink>
              </li>
              <li>
                <button className="bg-blue-500 pr-2 pl-2 pt-1 pb-1 w-20 rounded hover: bg-blue-300 " onClick={toSignIn}>
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation
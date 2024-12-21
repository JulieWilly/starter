import { useNavigate } from 'react-router';

const SignUp = () => {
    const navigate  = useNavigate();
    // to sign in page
    const toSignIn = () => {
        navigate('sign-in')
    }
  return (
    <div className="flex items-center justify-center p-2 w-full flex-col">
      <div className="w-full">
        <h1 className="text-2xl  text-center pb-2 font-medium">
          Starter Blogs
        </h1>
        <hr />
      </div>
      <div className="mt-8">
        <h2 className=" font-light text-3xl text-center">
          Get started with starter blogs
        </h2>

        <form className="mt-8 flex-col flex gap-4  ">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light">
              First name
            </label>
            <input
              className="h-10 focus:border-black border-2 ps-2 "
              type="text"
              name="firstname"
              value={"John"}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-capitalize">
              Last Name
            </label>
            <input
              className="h-10 focus:border-black border-2 ps-2 "
              type="text"
              name="lastname"
              value={"Doe"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-capitalize">
              Email
            </label>
            <input
              className="h-10 focus:border-black border-2 ps-2 "
              type="email"
              name="emailAddress"
              value={"johdoes"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-light text-capitalize">
              Password
            </label>
            <input
              className="h-10 focus:border-black border-2 ps-2 "
              type="password"
              name="password"
              value={"johdoes   "}
            />
          </div>

          <button className="w-full bg-black  text-white p-2 mt-6">
            {" "}
            Login{" "}
          </button>

          <div className="mt-8">
            <span>Already have an account ? </span>
            <span
              className=" text-end mt-2 underline cursor-pointer "
              onClick={toSignIn}
            >
              Sign in
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp
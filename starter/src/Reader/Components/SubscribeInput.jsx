
const SubscribeInput = () => {
  return (
    <div className="flex flex-row gap-2 border-b-2 overflow-hidden border-black bg-white border-green  p-1">
      <input
        type="email"
        placeholder=" Enter your email address "
        className="focus:border-none focus:outline-none border-none ps-2 h-10 w-full"
      />
      <button className="bg-[#15D79F] text-xl w-36 text-black p-2  rounded-sm hover:scale-95 hover:transition-all ">
        Subscribe
      </button>
    </div>
  );
}

export default SubscribeInput
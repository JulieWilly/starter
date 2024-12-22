
const SubscribeInput = () => {
  return (
    <div className="flex flex-row gap-2 border-2 bg-white border-green rounded">
      <input
        type="email"
        placeholder=" Enter your email address "
        className="focus:border-none focus:outline-none border-none ps-2 h-10 w-72"
      />
      <button className="bg-[#15D79F] text-xl w-28 text-black p-2 w-24 rounded-sm hover:scale-95 hover:transition-all ">
        Subscribe
      </button>
    </div>
  );
}

export default SubscribeInput
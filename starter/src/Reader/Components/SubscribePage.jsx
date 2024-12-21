import subscribeImg from '../../assets/subscribe.jpg'

const SubscribePage = () => {
  return (
    <div className="bg-[#FBF8F2] mb-8">
      <div className="bg-[#1B4942] flex  items-center gap-10 ">
        <div className="w-1/2 ">
          <img
            src={subscribeImg}
            alt=" blog image"
            className="w-full h-96 block object-cover"
          />
        </div>
        <div className='flex flex-col items-center  gap-4'>
          <h1 className='text-3xl text-white font-bold'>Subscribe to our news letter </h1>
          <div className="flex flex-row gap-2 border-2 bg-white border-white rounded">
            <input
              type="email"
              placeholder=" Enter your email address "
              className="focus:border-none focus:outline-none border-none ps-2 h-10 w-72"
            />
            <button className="bg-[#15D79F] text-xl w-28 text-black p-2 w-24 rounded-sm hover:scale-95 hover:transition-all ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribePage
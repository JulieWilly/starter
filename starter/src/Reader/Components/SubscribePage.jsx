import subscribeImg from '../../assets/subscribe.jpg'
import SubscribeInput from './SubscribeInput';

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
      <SubscribeInput />
        </div>
      </div>
    </div>
  );
}

export default SubscribePage
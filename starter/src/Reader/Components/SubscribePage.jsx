import SubscribeInput from './SubscribeInput';

const SubscribePage = () => {
  return (
    <div className="bg-[#1B4942] h-52  grid place-content-center">
      <div className="flex flex-row items-center  gap-4">
        <h1 className="text-3xl text-white font-bold">
          Subscribe to our news letter{" "}
        </h1>
        <SubscribeInput />
      </div>
    </div>
  );
}

export default SubscribePage
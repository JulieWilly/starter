import MostReadCard from './MostReadCard'

const MostRead = () => {
  return (
    <div className="p-8 pb-16 w-full bg-[#FBF8F2]  ">
      <div className="flex flex-row justify-between items-center gap-2">
        <hr className="h-[.05rem] bg-[#1B4942]  w-full" />
        <h1 className="text-xl w-28 text-center    ">Most read </h1>
      </div>
      <div>
        <MostReadCard />
      </div>
    </div>
  );
}

export default MostRead
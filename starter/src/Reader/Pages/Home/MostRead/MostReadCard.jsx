import Image from "../../../Components/Image";
import Button from "../../../Components/Button";

const MostReadCard = () => {
  return (
    <div>
      <div className="flex flex-row gap-4  p-2 items-center ">
        <div className="w-1/2 h-[20rem] ">
          <Image
            path={
              "https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          />
        </div>
        <div className=" w-1/2">
          <div className="flex flex-row gap-4">
            <h1>Author</h1> <span>12 Min ago</span>
          </div>
          <h1 className="font-bold text-4xl text-black line-clamp-2 mt-4 ">
            This is a story that I would want everyone to listen and get to
            learn from it
          </h1>
          <p className="mt-6 tracking-wide line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nam
            at laudantium exercitationem, ea quisquam dolorem quas quasi ex
            eligendi aspernatur voluptates inventore autem. Aliquam voluptate
            ipsam repudiandae perferendis saepe.
          </p>

          <div className="flex flex-row gap-8 mt-10">
            <h1 className="text-red-500 font-bold">Ideas</h1>
            <span className="italic">12 Min read</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center justify-between p-2">
        <div className="w-1/4 h-52 ">
          <Image
            path={
              "https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          />
          <div>
            <h1 className="line-clamp-1 p-2 text-black font-bold tracking-wide">
              This it the Title of the message
            </h1>
          </div>
        </div>
        <div className="w-1/4 h-52">
          <Image
            path={
              "https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          />
          <div>
            <h1 className="line-clamp-1 p-2 text-black font-bold tracking-wide">
              This it the Title of the message
            </h1>
          </div>
        </div>
        <div className="w-1/4 h-52">
          <Image
            path={
              "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          />
          <div>
            <h1 className="line-clamp-1 p-2 text-black font-bold tracking-wide">
              This it the Title of the message
            </h1>
          </div>
        </div>
        <div>
          <Button name={"More Trends"} />
        </div>
      </div>
    </div>
  );
};

export default MostReadCard;

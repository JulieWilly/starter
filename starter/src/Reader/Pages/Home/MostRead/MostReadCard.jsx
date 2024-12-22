import React from "react";
import TopNavigation from "../../../Components/TopNavigation";
import Image from "../../../Components/Image";

const MostReadCard = () => {
  return (
    <div>
      <TopNavigation sectName={"Most Read"} isSet={"false"} />

      <div>
        <div className="flex flex-row gap-4  p-4 ">
          <div className="w-1/2 h-[24rem] ">
            <Image
              path={
                "https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            />
          </div>
          <div className="p-4 w-1/2">
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

            <div className="flex flex-row gap-8 mt-16">
              <h1 className="text-red-500 font-bold">Ideas</h1>
              <span className="italic">12 Min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostReadCard;

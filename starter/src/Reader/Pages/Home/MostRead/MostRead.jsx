import React from 'react'
import TopNavigation from '../../../Components/TopNavigation'
import MostReadCard from './MostReadCard'

const MostRead = () => {
  return (
    <div className="p-8 pb-16 w-full bg-[#FBF8F2]  ">
      <TopNavigation sectName={"Most Read"} isSet={"false"} />
      <div>
        <MostReadCard />
      </div>
    </div>
  );
}

export default MostRead
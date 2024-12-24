import React from 'react'

const ScaleCard = ({card}) => {
  return (
 <div className="flex w-1/2 flex-col cursor-pointer p-1 rounded-xl hover:-translate-y-1 hover:shadow-lg delay-200 duration-150 ease-in-out   ">
{card}
 </div>
  )
}

export default ScaleCard
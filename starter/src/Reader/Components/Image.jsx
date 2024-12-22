import React from 'react'

const Image = ({path}) => {
  return (
        <img src={path} alt=" Image" className='object-cover block w-full h-full rounded-xl' />
  )
}

export default Image
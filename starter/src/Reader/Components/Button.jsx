import React from 'react'

const Button = ({action, name}) => {
  return (
    <button onClick={action} className="bg-[#15D79F] text-black p-2 w-24 rounded-sm hover:scale-95 hover:transition-all ">
{name}
    </button>
  );
}

export default Button
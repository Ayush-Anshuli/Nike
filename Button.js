import React from 'react'

function Button( {label,iconURL} ) {
  return (
    <button className=' flex justify-center items-center px-7 py-4 border font-montserrat text-white bg-red-500 rounded-full mt-5
     sm:text-[15px] max-sm:ml-0 max-sm:px-3 max-sm:py-3 '>
        {label}
        <img src={iconURL} alt='arrowright' className='ml-2 w-5 h-5 rounded-full ' />
    </button>
  )
}

export default Button
import React from 'react'
import shoe8 from '../assets/images/shoe8.svg'
function Superquality() {
  return (
    <section className='max-container'>

        <div className='flex justify-around'>
          <h1>
            <p className='text-7xl mt-10 p-4 font-bold' >We Provide You <span className='text-red-500'>Super <br/> quality</span> Shoes</p>
            <p className='text-xl mt-2 p-4 text-gray-500'>Ensuring premium comfort and style,our meticulously crafted footwear is designes to elevate your experience, providing you with unmatched quality,innovation,and a touch of elegance.</p>
            <p className='text-xl mt-2 p-4 text-gray-500'>Our dedication to detail and excellences your satisfaction</p>
            <button className='bg-red-500 text-white p-5 m-2 rounded-full'>View details</button>
          </h1>
          <img src={shoe8}/>
        </div>


    </section>
  )
}

export default Superquality
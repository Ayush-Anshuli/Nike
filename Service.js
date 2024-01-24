import React from 'react'
import star from '../assets/icons/star.svg'

function Service() {
  return (
    <section className='max-container mt-8'>

      <div className='flex justify-around'>
          <div>
          <p className='border h-52 w-[350px] shadow-xl p-5 mt-5'>
             <img src={star} className='p-4'/>
              <span className='font-bold text-2xl m-2'> Free Shipping</span> <br/>
              <span className='text-lg'>Enjoy seamless shooping with our complimentary service.</span>
             </p>
          </div>

          <div>
          <p className='border h-52 w-[350px] shadow-xl p-4 mt-5'>
             <img src={star} className='p-2'/>
            <span className='font-bold text-2xl m-2'>Secure Payment</span> <br/>
              <p className='text-lg'>Experience worry-free transactions with our secure Payment options.</p>
             </p>
          </div>

          <div>
          <p className='border h-52 w-[350px] shadow-xl p-4 mt-5'>
             <img src={star} className='p-2'/>
              <span className='font-bold text-2xl m-2'>Love to help you </span><br/>
              <span className='text-lg'>Our dedicated team is here to assist you every step of the way.</span>
             </p>
          </div>
      </div>

    </section>
  )
}

export default Service
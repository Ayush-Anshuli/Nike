import React from 'react'
import shoe4 from '../assets/images/shoe4.svg'
import shoe5 from '../assets/images/shoe5.svg'
import shoe6 from '../assets/images/shoe6.svg'
import shoe7 from '../assets/images/shoe7.svg'
import star from '../assets/icons/star.svg'

function Popularproducts() {
  return (
    <section className='max-container' >

      <div>
        <h1>
          <p className='text-7xl p-3 m-2 font-bold'>Our <span className='text-red-500'>
            Popular
          </span> <span> Products </span> </p>
        </h1>

        <div>
          <p className='text-xl m-2 p-4 text-gray-500'> Experience top-notch quality and style with our sought after <br />
            selections. Discover a world of comfort,design and value
          </p>
        </div>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
          <div>
              <img src={shoe4} className='max-2xl:w-[250px] max-xl:h-[230px] w-[280px] h-[280px]' />
              <p className='flex pt-5 pl-5 mt-2'><img src={star}/> <span className='pl-2 text-center font-bold font-mono '>(4.5) </span></p>
              <p className='pl-10 mt-1 font-mono'>Nike Jordan - 101</p> <p className='pl-10 mt-1 font-mono'>$240.29</p> 
          </div>

          <div>
              <img src={shoe5} className='max-2xl:w-[250px] max-xl:h-[230px] w-[280px] h-[280px]' />
              <p className='flex pt-5 pl-5 mt-2'><img src={star}/><span className='pl-2 text-center font-bold font-mono'>(4.7)</span></p>
              <p className='pl-10 mt-1 font-mono'>Nike Jordan - 311</p> <p className='pl-10 mt-1 font-mono'>$240.29</p> 
          </div>


          <div>
              <img src={shoe6} className='max-2xl:w-[250px] max-xl:h-[230px] w-[280px] h-[280px]' />
              <p className='flex pt-5 pl-5 mt-2'><img src={star}/><span className='pl-2 text-center font-bold font-mono'>(4.2)</span></p>
              <p className='pl-10 mt-1 font-mono'>Nike Jordan - 201</p> <p className='pl-10 mt-1 font-mono'>$240.29</p> 

          </div>

          <div>
              <img src={shoe7} className='max-2xl:w-[250px] max-xl:h-[230px] w-[280px] h-[280px] max-lg:hidden' />
              <p className='flex pt-5 pl-5 mt-2'><img src={star} className='max-lg:hidden'/><span className='pl-2 text-center font-bold font-mono max-lg:hidden'>(4.9)</span></p>
              <p className='pl-10 mt-1 font-mono max-lg:hidden'>Nike Jordan - 401</p> <p className='pl-10 mt-1 font-mono max-lg:hidden'>$240.29</p> 
          </div>

      </div>

    </section>
  )
}

export default Popularproducts
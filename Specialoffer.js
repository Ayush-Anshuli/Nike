import React from 'react'
import Button from './Button'
import arrowright from '../assets/icons/arrowright.svg'
import offer from '../assets/images/offer.svg'

function Specialoffer() {
  return (
    <section className='max-container flex justify-between w-full mt-8'>
    <div className='h-11 w-[1400px]'>
        <img src={offer}/>
      </div>
      <div>
          <h1>
              <p className='font-bold text-6xl p-5 m-2 mt-10'>
                <span className=' text-red-500 '>Special </span> <span>Offer</span>
              </p>

              <p className='text-xl m-2 p-5'>
                Embark o a shopping journey that redefines you experience with our unbeatable deals.From premeir selections to incred bie savings,we offer unpralled value that sets us apart. 
              </p>

              <p className='text-xl m-2 p-5'>
                Navigate a realm of possibilities esigned to fullfillyour desires,surpassing the loftiest expectations.Your journey with us is nothing short of exceptional.
              </p>
              <div className='flex ml-10'>
      <Button label="Shop Now" iconURL={arrowright}/>
      <button className='text-black text-center ml-4 mt-6 p-4 rounded-full h-15 w-[150px] border-2'>Learn More </button>
    </div>
          </h1>

      </div>

    </section>
  )
}

export default Specialoffer
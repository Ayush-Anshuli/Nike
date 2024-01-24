import React from 'react'
import Button from './Button'
import arrowright from '../assets/icons/arrowright.svg'
import bigshoe1 from '../assets/images/bigshoe1.png'
import bigshoe2 from '../assets/images/bigshoe2.png'
import bigshoe3 from '../assets/images/bigshoe3.png'
function Hero() {
  return (
    // <section id='home' className='flex  justify-evenly gap-20 min-h-screen max-container '>

    //   <div className='xl:w-2/5 flex flex-col justify-center max-xl:padding-x pt-28'>
    //     <div>

    //     </div>
    //     <div className='p-2 absolute left-20'>
    //       <p className='text-red-500 mb-5 text-lg ml '>Our Summer Collection</p>
    //       <h1>
    //         <span className='pr-2 text-8xl  max-sm:text-[30px] font-bold max-2xl:text-5xl bg-white '>
    //           The New Arrival <br />
    //         </span>
    //         <span className='text-8xl text-red-500 max-sm:text-[30px] font-bold max-2xl:text-5xl'>
    //           Nike
    //         </span> <span className='text-8xl pl-2 max-sm:text-[30px] font-bold max-2xl:text-5xl'>Shoes</span>
    //       </h1>

    //       <p className='pr-3 mt-2 text-xl text-gray-500'>
    //         Discover stylish Nike arrivals , quality <br /> comfort , and innovation for
    //         your active life.

    //         <div>
    //           <Button label="Show More" iconURL={arrowright} />
    //         </div>


    //         <div className='w-full flex justify-evenly'>
    //           <ul className='flex  w-full gap-8 mt-8 p-2 font-bold text-lg max-sm:text-[12px]'>
    //             <li>1k+ <br /> Brands </li>
    //             <li>500k+ <br /> Shops </li>
    //             <li>250k+ <br /> Customer </li>
    //           </ul>
    //         </div>
    //       </p>
    //     </div>
    //   </div>

    //   <div className='h-100 w-full'>
    //     <img src={bigshoe1} alt='shoe' width={710} height={500} className='top-[200px] right-[200px] absolute max-2xl:right-[100px] max-2xl:h-[400px] max-2xl:w-[500px] max-lg:hidden p-2' />
    //   </div>
    // </section>

    <section className='max-container h-full'>
      <div className='flex'>
        <h1 className='p-8 mt-28 h-[650px]'>
              <p className='text-red-500 text-xl p-3'>  Our Summer Collection</p>
              <p className='font-bold text-8xl bg-white' >The New Arrival</p>
              <p className='font-bold text-8xl'><span className='text-red-500' >Nike</span> Shoes</p>
              <p className='mt-2 text-gray-500'>Discover Stylish Nike arrivals , quality <br /> comfort , and innovation for yo ur active life</p>
            <Button label="Show More" iconURL={arrowright} />
              <div className='w-full flex justify-evenly'>
              <ul className='flex  w-full gap-8 mt-8 p-2 font-bold text-lg max-sm:text-[12px]'>
                <li>1k+ <br /> Brands </li>
                <li>500k+ <br /> Shops </li>
                <li>250k+ <br /> Customer </li>
              </ul>
            </div>
        </h1>

      <div className='p-4 m-2 absolute left-[900px] top-[100px]'> <img src={bigshoe2} className='h-[700px]'/> </div>

      </div>
    </section>

  )
}

export default Hero
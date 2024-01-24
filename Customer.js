import React from 'react'
import customer1 from '../assets/images/customer1.jpeg'
import customer2 from '../assets/images/customer2.svg'
import star from '../assets/icons/star.svg'

function Customer() {
  return (
    <section className='max-container bg-blue-50'>
        <div>
           <h1>
             <p className='text-center text-6xl mt-12 p-5 font-bold'>
                <spna>Whats Our</spna> <span className='text-red-500'>Customers</span> <span>Says ?</span>
             </p>
             <p className='text-xl text-center p-5 mt-2'>Here genuine stories from our satisfied customers about <br/>their exceptional experience with us.</p>
           </h1>
        </div>

        <div className='flex justify-between mt-5 p-10 '>
        <div>
                  <img src={customer1} className='h-[120px] rounded-full ml-16 mb-5' />
                  <p className='text-center'> The attention to detail and the quality of <br/> the product executed myb expectations. <br/> Highly recommended!</p>
                  <p className='text-center mt-5 text-lg pl-3'><img src={star} className='absolute left-[370px]'/> (4.5)</p>
                  
                  <p className='text-center font-bold text-2xl'>Harry Parker</p>
            </div>

            <div>
                  <img src={customer2} className='h-[120px] rounded-full ml-16 mb-5' />
                  <p className='text-center'> The product not only met but exceeded <br/> my expectaions.I'll definitely be a <br/> returning customer! </p>
                  <p className='text-center mt-5 text-lg pl-3'><img src={star} className='absolute left-[1450px]'/> (4.5)</p>
                  
                  <p className='text-center font-bold text-2xl'>Geoge Harison</p>
            </div>
          
        </div>
        
    </section>
  )
}

export default Customer
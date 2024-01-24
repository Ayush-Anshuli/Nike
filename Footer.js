import React from 'react'
import footer from '../assets/images/footer.png'
import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'

function Footer() {
  return (
    <section className='max-container'>
        <div className='p-5 '>
          <img src={footer} height={100} width={100}/>
        </div>

        <div>
          <p className='text-xl p-5 m-2 text-gray-500'>
            Get shoes ready for the new term at your <br/> nearest Nike store . Find Your perfect Size in <br/> Store.Get Rewards
          </p>
        </div>

        <div className='flex ml-5'>
            
            <div className='bg-white p-2 gap-2 cursor-pointer rounded-full m-2'>
            <a href='https://www.instagram.com/'> <img src={instagram}/> </a>
            </div>

            <div className='bg-white p-2 cursor-pointer rounded-full m-2'>
            <a href='https://www.instagram.com/'> <img src={facebook} className=''/> </a>
            </div>

            <div className='bg-white p-2 cursor-pointer rounded-full m-2'>
            <a href='https://www.instagram.com/'> <img src={twitter}/> </a>
            </div>

        </div>

        <div className='flex justify-between'>
          <div className='p-5 m-5'>
             <p className='font-bold text-2xl' >Products</p>
             <ul className='text-lg text-gray-400 mt-2'>
                <li>Air Force 1</li>
                <li>Air Max 1</li>
                <li>Air Jordan 1</li>
                <li>Air force 2</li>
                <li>Nike Waffle Racer</li>
                <li>Nike Cortez</li>
             </ul>
          </div>

          <div className='p-5 m-5'>
             <p className='font-bold text-2xl' >Help</p>
             <ul className='text-gray-500 mt-2'>
                <li>About</li>
                <li>FAQs</li>
                <li>How it works</li>
                <li>Priivacy policy</li>
                <li>Payment policy</li>
             </ul>
          </div>

          <div className='p-5 m-5'>
             <p className='font-bold text-2xl' >Get in touch</p>
             <ul className='text-gray-500 mt-2'>
                <li>customer@nike.com</li>
                <li>+8210637282</li>
                <li>Made With ❤️ Ayush Anshuli</li>
             </ul>
          </div>

        </div>


    </section>
  )
}

export default Footer
import React from 'react'
import headerlogo from '../assets/images/headerlogo.svg'
import hamburger  from '../assets/icons/hamburger.svg'


function Nav() {
  return (
    // <header className='padding-x py-8 z-10 w-full absolute ' >
    //     <nav className='flex justify-between items-center max-container'>
    //         <a href='/'>
    //             <img src={headerlogo} alt='logo' width={130} height={30} className='absolute left-20' />
                
    //         </a>
              
    //         <ul className='flex gap-8 items-center mr-5 max-lg:hidden'>
    //           <li className='cursor-pointer p-2'>Home</li>
    //           <li className='cursor-pointer p-2'>About us</li>
    //           <li className='cursor-pointer p-2'>Products</li>
    //           <li className='cursor-pointer p-2'>Contact</li>
    //           <li className='cursor-pointer p-2 font-bold'>Sign in / Explore now </li>
    //         </ul>
    //         <img src={hamburger} height={20} width={25} className='hidden max-lg:block cursor-pointer'/>
    //     </nav>
    // </header>

    <header className='max-container h-full'>
      <nav className='flex justify-between'>
          <div className='p-5 mt-5 cursor-pointer'>
              <img src={headerlogo} />
          </div>
          <div>
              <ul className='flex gap-16 p-5 mt-5'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About Us</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='font-bold cursor-pointer'>Sign in / Explore now</li>
              </ul>
              
          </div>

      </nav>
    </header>

  )
}

export default Nav
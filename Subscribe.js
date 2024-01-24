import React from 'react'

function Subscribe() {
  return (
      <section className='max-container mt-8'> 

      <div>
        <h1>
          <p className='text-center text-6xl p-5 mb-10 font-bold'> <span>Sign up For </span> <span className='text-red-500'>Updates </span> <span>& NewsLetter </span></p>
        </h1>
      </div>

<form>
        <div className='flex'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input type='text' placeholder='nike@gmail.com' className='w-full p-6 rounded-full border-black outline-none border-2'/>
            <button className='p-6 w-[200px] bg-red-500  text-white absolute left-[1471px] mb-1 rounded-full font-bold text-lg'>Sign Up</button>
        </div>
</form>

      </section>
  )
}

export default Subscribe
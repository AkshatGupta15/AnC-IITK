import React, { useEffect } from 'react'

const HomeText = () => {
    
  return (
    <> 
      <div className=' md:h-fit h-[50vh] '>    
          <div className='border-2 sedan-sc-regular antialiased hover:subpixel-antialiased  bg-white/100 dark:bg-black dark:text-white opacity-80  rounded-3xl p-3 hover:text-[2rem] transition duration-300 h-full flex flex-col justify-center items-center' >
              <h1 className='md:text-7xl text-4xl  text-nav-links font-bold md:mb-3 mb-5 underline decoration-2 underline-offset-8 '>About</h1>
              <p className='md:text-2xl text-xl font-medium'>The Academics and Career Council of the Indian Institute of Technology, Kanpur is a council directly placed under the Student's Gymkhana, that aims to foster all needs related to academics and research for the campus dwellers.</p>
          </div>
      </div>  
    </>

  )
}

export default HomeText
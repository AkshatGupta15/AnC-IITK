import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/bg1.jpeg'
import img2 from '../assets/bg2.jpeg'
import img3 from '../assets/bg3.jpeg'
import HomeText from './HomeText'
export const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div >

        <div>
  
            <div className='w-[100%] bg-[url("./assets/svg10.svg")] dark:bg-[url("./assets/darksvg1.svg")] bg-no-repeat bg-cover bg-center bg-fixed h-[100vh]  flex justify-center items-center'>
              <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='flex justify-center items-center'>
                <div className='md:w-[40%]'>
                  <HomeText />
                </div>
                <div className='md:w-[40%] md:flex hidden'>
                  <div className=''>
                    <div className='md:translate-x-[50%] md:translate-y-[30%]'>
                      <img className='w-96 rounded-2xl hover:scale-105 ' src={img2}></img>
                    </div>
                    <div className=' md:translate-x-[10%]'>
                      <img className='w-96 rounded-2xl hover:scale-105 block z-10' src={img1}></img>
                    </div>
                    <div className='md:translate-y-[-30%] md:translate-x-[50%]'>
                      <img className='w-96 rounded-2xl hover:scale-105' src={img3}></img>
                    </div>
                  </div>
                </div>
                </div>
                {/* <img className='md:bg-contain w-full overflow-hidden h-[90vh] border-4 border-yellow-500' src={bg1}></img> */}
            </div>
        </div>
    </div>
  )
}

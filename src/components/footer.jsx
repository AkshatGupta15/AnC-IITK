import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import XIcon from '@mui/icons-material/X';
import CopyrightIcon from '@mui/icons-material/Copyright';
import logo from "../assets/anc-logo.png"
const Footer = () => {
  return (
    <div>
        <div className='bg-nav-links p-1 dark:bg-black text-white'>
            <div className='flex justify-between items-center md:w-[80%] w-[95%] mx-auto my-auto md:h-[8vh] h-[5vh]'>
                {/* <div>
                    <img src={logo} className='w-8' ></img>
                </div> */}
                <div>
                    <p className=' text-center text-[10px] font-serif '><CopyrightIcon/> AnC - Designed by <span className='font-semibold'>Akshat</span>, all rights reserved.</p>
                </div>
                <div className='flex md:gap-4 gap-1'>
                    <a href="#"><InstagramIcon/></a>
                    <a href="#"><FacebookIcon/></a>
                    <a href="#"><XIcon/></a>
                    <a href="#"><MailIcon/></a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
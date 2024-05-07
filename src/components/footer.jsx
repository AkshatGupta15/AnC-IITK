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
            <div className='flex justify-between items-center w-[80%] mx-auto my-auto h-[8vh]'>
                {/* <div>
                    <img src={logo} className='w-8' ></img>
                </div> */}
                <div>
                    <p className=' text-center'><CopyrightIcon/> AnC - Designed by <span>Akshat</span>, all rights reserved.</p>
                </div>
                <div className='flex gap-4'>
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
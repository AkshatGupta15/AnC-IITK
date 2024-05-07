import React from 'react'
import Logo from '../assets/anc-logo.png'
import '../output.css'

export const Navbar = () => {
    
    const navlinks = [
        // {link : "Home", path: "home"},
        {link : "Academics", path: "academics"},
        {link : "Research", path: "research"},
        {link : "Int. Relation", path: "intrelation"},
        {link : "Career Dev", path: "careerdev"},
        {link : "Blogs", path: "blogs"},
        {link : "Interest Groups", path: "interestgroups"},
        {link : "Portals", path: "portals"},
        {link : "Contact", path: "contact"}
    ]
  return (
    <div className='z-[1000] dark:bg-black bg-white  opacity-95 fixed w-[100%]'>
    <nav className='flex w-[96%] mx-auto z-[1000] justify-between' >
        <div className='md:w-[60px] w-[80px] mx-4 my-1'>
            <a href='#'>
            <img src={Logo} className=''></img>
            </a>
        </div>
        {/* LINKS */}
        <div className='h-full m-auto md:flex hidden' >
            <ul className='text-center flex justify-between items-center gap-4 m-auto flex-wrap  w-[100%] h-[100%]'>
            {
            navlinks.map(({link,path}) =><a className='roboto-slab hover:text-white hover:bg-nav-links  px-3 py-2 rounded-xl  text-xl font-semibold transition-all duration-300' key={link} href={path}>{link}</a>)
            }
            </ul>
            
        </div>
        <div  className='flex items-center justify-center'>
            <div className='bg-black w-[40px] h-[40px] rounded-full'></div>
        </div>
        
        
    </nav>
    </div>
  )
}

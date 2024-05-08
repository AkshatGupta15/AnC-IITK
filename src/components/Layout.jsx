import React from 'react'
import { Navbar } from './Navbar'
import { Banner } from './Banner'
import Home from './Home'
import Footer from './footer'
import NewNavbar from './NewNavbar'

const Layout = () => {
  return (
    <div>
        <div className=' dark:bg-[#031524] dark:text-white'>
            <div>
                {/* <NewNavbar/> */}
                <Navbar/>
            </div>
            <div>
                <Banner/>
            </div>
            <div >
                <Home/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Layout
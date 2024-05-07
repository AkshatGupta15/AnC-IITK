import React from 'react'
import { Navbar } from './Navbar'
import { Banner } from './Banner'
import Home from './Home'
import Footer from './footer'

const Layout = () => {
  return (
    <div>
        <div className=' dark:bg-black dark:text-white'>
            <div>
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
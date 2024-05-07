import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Banner } from './components/Banner'
import { motion, useScroll } from "framer-motion";
import { Navbar } from './components/Navbar'
import Home from './components/Home';
import CustomCard1 from './components/CustomCard1';
import HomeText from './components/HomeText';
import Layout from './components/Layout';


function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <div className='max-w-screen-2xl overflow-hidden '>
      <Layout/>
    </div>
    {/* <motion.div
    style={{}}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      /> */}
    {/* <div className=' overflow-hidden'>
      <div className='fixed top-0 z-50' >
        <Navbar/>
        </div>
      <div className='z-20 absolute flex top-[50vh] translate-y-[-50%] items-center md:justify-end justify-center '>
      <HomeText/>
      </div>
      <div className=' top-0  w-full -z-40 h-[80vh] border-4 border-gray-900 '>
        <Banner/>
      </div>
      <div className='mt-[15vh] bg-slate-100'>
        <Home/>
      </div>
    </div>
     */}
     
    
    </>
  )
}

export default App

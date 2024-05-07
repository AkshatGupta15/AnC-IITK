import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import { Card } from './card';
import CustomCard1 from './CustomCard1';
import Research from "../assets/research.jpeg"
import Academics from "../assets/bg3.jpeg"
import International from "../assets/international.jpeg"


const Home = () => {
  const homeText = [
    {
      animation: "fade-left",
      heading : "UG/PG Academics",
      text : "The UG/PG Academics Wing takes up the responsibility of the academics related work of the Academic and Career Council. It acts as an interface between the institute policy makers and the students on matters related to academia.",
      image: Academics
    },
    {
      animation: "fade-left",
      heading: "Research",
      text : "The Research Wing of the council aims at cultivating and promoting research interests in the student community, by providing the freedom and opportunities to work upon diverse areas of research.",
      image : Research
    },
    {
      animation: "fade-left",
      heading: "International Relations",
      image: International,
      text : "The International Relations Wing works in close association with the Office of International Relations (OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts."
    },
    {
      animation: "fade-left",
      heading: "Career Development",
      image: International,
      text : "The Career Development Wing of the Council, with the mandate of Career Development of students, shall provide an extraordinary boost in regard to Career Aspects."
    }
  ]
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className=''>
        <div className='text-5xl font-semibold underline underline-offset-4 decoration-2 '>
          <h1 className='font-serif ml-12 mt-4'>GOALS...</h1>
        </div>
        <div className=' md:grid grid-cols-4 gap-6 p-6'>
        {
            homeText.map(({heading, text, image, animation}) =><CustomCard1 animation={animation} image={image} heading={heading} key={heading} text={text}/>)
        }
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'

export const Card = ({animation,text }) => {
  return (
    <div>
        <div data-aos="fade-right" className='border-2 h-[200px]'>
            <p>{text}</p>
        </div>
    </div>
  )
}

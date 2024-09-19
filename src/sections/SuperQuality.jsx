import React from 'react'
import Button from '../components/Button'
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us"
              className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
      <div className=' flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h2 className='mt-10 capitalize font-palanquin text-4xl font-bold lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red '> Super </span> 
          <span className='text-coral-red '>Quality</span> Shoes
        </h2>
        <p className='mt-10 mb-10 flex flex-1 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing
          you with unmatched quality, innovation and touch of elegance.
        </p>

        <Button label='View Details'/>
      </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
          <img src={shoe8}
               className="obeject-contain"
               alt="shoe8"
               width={570}
               heigth={522} />
      </div>
    </section>
  )
}

export default SuperQuality

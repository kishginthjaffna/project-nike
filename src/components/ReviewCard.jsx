import React from 'react'
import {star} from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col w-[350px] bg-white p-10 shadow-lg rounded-3xl'>
        <img src={imgURL} alt="" className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='text-xl mt-6 font-montserrat'>{feedback}</p>

        <div className='flex flex-row gap-2 mt-10'>
            <p className='text-2xl'>{rating}</p>
            <img src={star} width={24} height={24} className='object-contain m-0'/>
        </div>

         <h3 className='mt-2 text-2xl font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard

import React from 'react'

const Button = ({label, icon, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex border-none justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full mt-5
    ${backgroundColor ? backgroundColor : 'bg-coral-red'}
    ${borderColor ? borderColor : 'border-coral-red'}
    ${textColor ? textColor : 'text-white'}`}>
        {label}
        {icon && <img src={icon}
             alt="icon"
             className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button

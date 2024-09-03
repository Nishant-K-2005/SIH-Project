import React from 'react'
import AICTElogo from '../images/AICTE-logo.png'

export default function Header() {
  return (
    <ul className='list-none flex justify-between items-center px-5 h-fit bg-yellow-300'>
        <li className='font-semibold text-xl w-5/6 md:w-1/2'>
            Special Scholarship Scheme for J&K and Ladakh (PM-USPY)
        </li>
        <li className='flex items-center text-xs w-1/6 md:w-1/2 md:justify-end'>
            <img className='h-14' src={AICTElogo}/>
            <span className='hidden md:block'>All India Council for Technical Education</span>
        </li>
    </ul>
  )
}


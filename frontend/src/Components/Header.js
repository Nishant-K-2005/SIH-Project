import React from 'react'
import AICTElogo from './AICTE-logo.png'
export default function Header() {
  return (
    <ul className='list-none flex justify-between items-center px-5 h-14 bg-yellow-300'>
        <li className='font-semibold text-xl'>
            Special Scholarship Scheme for J&K and Ladakh (PM-USPY)
        </li>
        <li className='flex items-center text-xs'>
            <img className='h-14' src={AICTElogo}/>All India Council for Technical Education
        </li>
    </ul>
  )
}


import React, { useState } from 'react'

export default function Address({ onButtonClick }) {
    const [cAdd, setCAdd] = useState('');
    const [cPinCode,setCPin] = useState('');
    const [pAdd, setPAdd] = useState('');
    const [pPinCode,setPPin] = useState('');
    const [mobile,setMobile] = useState('');
    const [altMobile,setAltMobile] = useState('');
    const [email, setEmail] = useState('');
    const [altEmail, setAltEmail] = useState('');

    return (
        <div>
            <form onSubmit={() => onButtonClick("pagethree")} className='flex flex-col w-3/4 lg:w-1/4 mx-auto justify-center items-center'>
                <h1 className='border-b-4 border-black py-5 w-full px-10 text-4xl mb-7'>Address & Contact</h1>

                {/* Address*/}
                <input
                    value={cAdd}
                    onChange={(e)=>{setCAdd(e.target.value)}}
                    type='text'
                    placeholder="Recidence Address*"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>
                </input>
                <input
                    value={cPinCode}
                    onChange={(e)=>{setCPin(e.target.value)}}
                    type='number'
                    placeholder="Recidence Address Pincode*"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>
                </input>
                
                <input
                    value={pAdd}
                    onChange={(e)=>{setPAdd(e.target.value)}}
                    id='PerAdd'
                    type='text'
                    placeholder="Permanent Address*"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>
                </input>
                <input
                    value={pPinCode}
                    onChange={(e)=>{setPPin(e.target.value)}}
                    id='PerAdd'
                    type='number'
                    placeholder="Permanent Address Pincode*"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>
                </input>

                {/* Mobile Number */}
                <input
                    value={mobile}
                    onChange={(e)=>{setMobile(e.target.value)}}
                    id='mobile'
                    type='number'
                    placeholder="Mobile Number*"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>
                </input>
                    
                {/* Alternate Mobile Number */}
                <input
                value={altMobile}
                onChange={(e)=>{setAltMobile(e.target.value)}}
                    id='Almobile'
                    type='number'
                    placeholder="Alternate Mobile Number"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'>
                </input>

                
                <input
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    id='email'
                    type='email'
                    placeholder="Email*"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>
                </input>

                <input
                    value={altEmail}
                    onChange={(e)=>{setAltEmail(e.target.value)}}
                    id='Alemail'
                    type='email'
                    placeholder="Alternate Email*"
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'>
                </input>
                
                <input type='submit' value={' Next '} className='bg-yellow-300 p-2 rounded-2xl w-24 mx-auto mt-5' ></input>

            </form>
        </div>
    )
}

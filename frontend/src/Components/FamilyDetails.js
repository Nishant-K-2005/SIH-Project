import React, { useState } from 'react';

export default function FamilyDetails({ onButtonClick }) {

    const [fname, setfname] = useState('');
    const [foccupation, setfoccupation] = useState('');
    const [fdesignation, setfdesignation] = useState('');
    const [mname, setmname] = useState('');
    const [moccupation, setmoccupation] = useState('');
    const [mdesignation, setmdesignation] = useState('');
    const [income, setincome] = useState('');

    return (
        <div className='bg-slate-50 flex justify-center items-center w-full'>
            <form className='flex-col justify-center items-center gap-10 mt-10 px-28 pb-28'>

                <h1 className='mb-7 text-4xl border-b-4 border-black py-5'> Family & Income Details</h1>

                <div className='flex mt-10'>

                    {/* Father Details */}

                    <div className='fatherdet flex gap-0'>
                        <div>
                            <h2 className='text-xl font-semibold ml-30'>Father's Details </h2>
                            <input
                                value={fname}
                                onChange={(e) => { setfname(e.target.value) }}
                                type='text' placeholder='Name' className='p-2 w-10/12 border-2 border-white rounded-xl mt-5 ' />
                            <input
                                value={foccupation}
                                onChange={(e) => { setfoccupation(e.target.value) }}
                                type='text' placeholder='Ocuupation' className='p-2 w-10/12 border-2 border-white rounded-xl mt-5 ' />
                            <input
                                value={fdesignation}
                                onChange={(e) => { setfdesignation(e.target.value) }}
                                type='text' placeholder='Designation' className='p-2 w-10/12 border-2 border-white rounded-xl mt-5 ' />
                        </div>
                        <div className='border-black border-2 h-36 w-36 mt-16 mr-40 rounded overflow-hidden p-2 relative'>
                            <input className='hidden' type='file'></input>
                            <div className='text-4xl absolute left-9 top-9'>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>

                    </div>

                    {/* Mother Details */}

                    <div className='motherDet flex'>
                        <div>
                            <h2 className='text-xl font-semibold ml-30'>Mother's Details </h2>
                            <input
                                value={mname}
                                onChange={(e) => { setmname(e.target.value) }}
                                type='text' placeholder='Name' className='p-2 w-10/12 border-2 border-white rounded-xl mt-5 ' />
                            <input
                                value={moccupation}
                                onChange={(e) => { setmoccupation(e.target.value) }}
                                type='text' placeholder='Ocuupation' className='p-2 w-10/12 border-2 border-white rounded-xl mt-5 ' />
                            <input type='text'
                                value={mdesignation}
                                onChange={(e) => { setmdesignation(e.target.value) }}
                                placeholder='Designation' className='p-2 w-10/12 border-2 border-white rounded-xl mt-5 ' />
                        </div>
                        <div className='border-black border-2 h-36 w-36 mt-16 rounded overflow-hidden p-2 relative'>
                            <input className='hidden' type='file'></input>
                            <div className='text-4xl absolute left-9 top-9'>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Income Details */}
                <select
                    value={income}
                    onChange={(e) => { setincome(e.target.value) }}
                    type='text' placeholder='Designation' className='p-2 w-9/12 border-2 border-white rounded-xl mt-8 '>
                    <option value="">Select Family Income*</option>
                    <option value="less than 2.5 lakh">less than 2.5 lakh</option>
                    <option value="2.5-5 lakhs">2.5 lakh - 5 lakh</option>
                    <option value="5-8 lakhs">5 lakh - 8 lakh</option>
                    <option value="above 8 lakhs">above 8 lakh</option>  </select>

                <button type='submit' onClick={() => onButtonClick("pagethree")} className='bg-yellow-300 p-2 rounded-2xl px-10 mt-4 ml-20'>Next</button>

            </form>
        </div>
    )
}


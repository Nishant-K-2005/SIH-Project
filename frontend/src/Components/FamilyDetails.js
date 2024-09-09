import React, { useRef, useState } from 'react';
import AICTE from '../images/AICTE-logo.png';

export default function FamilyDetails({ onButtonClick }) {

    const [fname, setfname] = useState('');
    const [foccupation, setfoccupation] = useState('');
    const [fdesignation, setfdesignation] = useState('');
    const [mname, setmname] = useState('');
    const [moccupation, setmoccupation] = useState('');
    const [mdesignation, setmdesignation] = useState('');
    const [income, setincome] = useState('');

    const [fatherImage, setFatherImage] = useState('');
    const [motherImage, setMotherImage] = useState('');

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const onFatherImageClick = () => {
        inputRef1.current.click();
    };

    const onFatherImageChange = (event) => {
        setFatherImage(event.target.files[0]);
    };

    const onMotherImageClick = () => {
        inputRef2.current.click();
    };

    const onMotherImageChange = (event) => {
        setMotherImage(event.target.files[0]);
    };


    return (
        <div className='bg-slate-100 flex justify-center items-center w-full'>
            <form className='flex-col justify-center items-center md:gap-10 m-auto mt-5 mb-5 md:px-28 pb-28 w-full h-full'>

                <span className='md:mb-7 px-10 md:text-4xl text-2xl border-b-4 border-black md:py-5 py-2'> Family & Income Details</span>

                <div className='flex-col mt-10 gap-0'>

                    {/* Father Details */}

                    <h2 className='text-xl font-semibold ml-30'>Father's Details </h2>
                    <div className='fatherdet flex flex-col-reverse md:flex md:flex-row md:gap-8 mt-4 justify-center items-center'>
                        <div>
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

                        <div className='flex justify-center'>
                            <div className='border-black border-4 h-36 w-36 md:mt-16  rounded'>
                                <div className='h-full flex justify-center items-center object-cover' onClick={onFatherImageClick}>
                                    {fatherImage ? <img className='h-full w-full' src={URL.createObjectURL(fatherImage)} /> : <img src={AICTE} />}
                                    <input type='file' ref={inputRef1} onChange={onFatherImageChange} style={{ display: "none" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mother Details */}

                    <h2 className='text-xl font-semibold ml-30 mt-8'>Mother's Details </h2>
                    <div className='motherdet flex flex-col-reverse  md:flex md:flex-row md:gap-8 mt-6 justify-center items-center'>
                        <div>
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
                        <input className='hidden' type='file'></input>
                        <div className='flex justify-center'>
                            <div className='border-black border-4 h-36 w-36 md:mt-16 rounded'>
                                <div className='h-full flex justify-center items-center object-cover' onClick={onMotherImageClick}>
                                    {motherImage ? <img className='h-full w-full' src={URL.createObjectURL(motherImage)} /> : <img src={AICTE} />}
                                    <input type='file' ref={inputRef2} onChange={onMotherImageChange} style={{ display: "none" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Income Details */}

                <select
                    value={income}
                    onChange={(e) => { setincome(e.target.value) }}
                    type='text' placeholder='Designation' className='p-2 w-5/12 border-2 border-white rounded-xl mt-8'>
                    <option value="">Select Family Income*</option>
                    <option value="less than 2.5 lakh">less than 2.5 lakh</option>
                    <option value="2.5-5 lakhs">2.5 lakh - 5 lakh</option>
                    <option value="5-8 lakhs">5 lakh - 8 lakh</option>
                    <option value="above 8 lakhs">above 8 lakh</option>
                </select>

                <button type='submit' onClick={() => onButtonClick("pagethree")} className='p-2 bg-yellow-400 rounded-2xl px-10 mt-4 md:ml-20'>Next</button>

            </form>
        </div>
    )
}


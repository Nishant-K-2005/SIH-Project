import React, { useState } from 'react'

export default function PersonalDetails() {
    const [name_, setName] = useState('');
    const [gender, setGender] = useState('');
    return (
        <div className='bg-slate-50'>
            <form className='flex flex-col w-3/4 m-auto mb-5 md:w-1/4'>

                {/* name */}
                <input
                    value={name_}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder="Name*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Gender */}
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>

                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <button type='submit' className=''>Submit</button>
                

            </form>
        </div>
    )
}

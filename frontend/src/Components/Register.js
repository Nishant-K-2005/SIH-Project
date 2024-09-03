import React, { useState } from 'react'
import { json } from 'react-router-dom';
import {
    useNavigate
} from "react-router-dom";

export default function Register() {

    const [rollno, setRollno] = useState('');
    const [motherName, setMN] = useState('');
    const [cndtName, setCndtName] = useState('');
    const [fatherName, setFN] = useState('');
    const [yearofpassing, setyearofpassing] = useState('');
    const [board, setBoard] = useState('');
    const [aadharcard, setaadharcard] = useState('');
    const [checkAadhar, setchkaadhar] = useState('');
    const [familyincome, setAnualIncome] = useState('');
    const [isDomicile, setisDomicile] = useState('');
    const [cuet, set_cuet] = useState('');
    const [cuetNum, set_cuetNum] = useState('');
    const [neet, set_neet] = useState('');
    const [neetNum, set_neetNum] = useState('');
    const [jee, set_jee] = useState('');
    const [jeeNum, set_jeeNum] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [chkEmail, setChkEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chkPass, setChkPass] = useState('');
    const N = useNavigate()

    async function RegisterUser(event) {
        event.preventDefault();
        if(aadharcard != checkAadhar){
            alert('Aadhar number do not match!')
        }
        else if(cuet=='true' && cuetNum==""){
            alert('Enter CUET registration number!')
        }
        else if(neet=='true' && neetNum==""){
            alert('Enter NEET registration number!')
        }
        else if(jee=='true' && jeeNum==""){
            alert('Enter JEE registration number!')
        }
        else if(email != chkEmail){
            alert("Email do not match!")
        }
        else if(password != chkPass){
            alert('Password do not match!')
        }
        else{
            const response = await fetch('http://localhost:5000/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                rollno,
                motherName,
                cndtName,
                fatherName,
                yearofpassing,
                board,
                aadharcard,
                familyincome,
                isDomicile,
                cuet,
                cuetNum,
                neet,
                neetNum,
                jee,
                jeeNum,
                mobile,
                email,
                password
            })
        })

        const data = JSON.stringify(await response.json())
        const errordata = data.substring(12,31)
        if(errordata == "User already exists"){
            alert("User Alerady exists");
            console.log("User already exists")
        }else{
            console.log(data)
            N('/User') 
        }
    }
        
        
    }

    return (
        <>
            <form onSubmit={RegisterUser} className='flex flex-col w-3/4 m-auto mb-5 md:w-1/3'>

                {/* 12th Roll Number */}
                <input
                    value={rollno}
                    onChange={(e) => setRollno(e.target.value)}
                    type='number'
                    placeholder="12th Roll Number*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Mother's Name */}
                <input
                    value={motherName}
                    onChange={(e) => setMN(e.target.value)}
                    type='text'
                    placeholder="Mother's Name as per 12th registration*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Candidate's Name */}
                <input
                    value={cndtName}
                    onChange={(e) => setCndtName(e.target.value)}
                    type='text'
                    placeholder="Candidate's Name as per 12th registration*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Father's Name */}
                <input value={fatherName}
                    onChange={(e) => setFN(e.target.value)}
                    type='text'
                    placeholder="Father's Name as per 12th registration*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Passing Year */}
                <input
                    value={yearofpassing}
                    onChange={(e) => setyearofpassing(e.target.value)}
                    type='number'
                    placeholder="year of Passing*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Board Name */}
                <input value={board}
                    onChange={(e) => { setBoard(e.target.value) }}
                    type='text'
                    placeholder="Board Name*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Aadhar Number */}
                <input value={aadharcard}
                    onChange={(e) => setaadharcard(e.target.value)}
                    type='number'
                    placeholder="Aadhar Number*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Confirm Aadhar Number */}
                <p id='aadharCheck' className='text-red-500 text-xs mt-5 mb-0'></p>
                <input
                    value={checkAadhar}
                    onChange={function checkAadhar(e) {
                        setchkaadhar(e.target.value)
                        let aadharError = document.getElementById('aadharCheck')
                        if (aadharcard != e.target.value) {
                            aadharError.innerHTML = "Aadhar Number do not match"
                        } else {
                            aadharError.innerHTML = ""
                        }
                    }
                    }
                    type='number'
                    placeholder="Confirm Aadhar Number*"
                    className='border border-solid border-gray-500 w-full mx-auto px-2'
                    required>
                </input>


                {/* Family Income Options */}
                <label htmlFor="familyIncome" ></label>
                <select
                    value={familyincome}
                    id="familyIncome"
                    name="familyIncome"
                    onChange={function(e){
                        setAnualIncome(e.target.value);
                    }}
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                    <option value="">Select Family Income*</option>
                    <option value="less than 2.5 lakh">less than 2.5 lakh</option>
                    <option value="2.5-5 lakhs">2.5 lakh - 5 lakh</option>
                    <option value="5-8 lakhs">5 lakh - 8 lakh</option>
                    <option value="above 8 lakhs">above 8 lakh</option>
                </select>


                {/* isDomicile */}
                <label for="isDomicile" ></label>
                <select
                value={isDomicile}
                onChange={function(e){
                    setisDomicile(e.target.value)
                }}
                id="isDomicile" 
                name="isDomicile" 
                className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                required>
                    <option value="">Is isDomicile of J&K or Ladakh?*</option>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>

                {/* CUET */}
                <label for="cuet" ></label>
                <select 
                value={cuet}
                onChange={function(e){
                    set_cuet(e.target.value)
                }}
                id="cuet" 
                name="cuet" 
                className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                required>
                    <option value="">Registered for CUET?*</option>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>
                {/* CUET NUMBER */}
                <input  
                id='cuetnum'
                value={cuetNum}
                onChange={function(e){
                    set_cuetNum(e.target.value)
                }}
                type='text' placeholder='CUET registration number*' 
                className='block border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                >
                </input>

                {/* NEET */}
                <label for="neet" ></label>
                <select
                value={neet}
                onChange={function(e){
                    set_neet(e.target.value)
                }}
                name="neet" 
                className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                required>
                    <option value="">Registered for NEET?*</option>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>
                {/* NEET number */}
                <input 
                value={neetNum}
                onChange={function(e){
                    set_neetNum(e.target.value)
                }}
                type='text' placeholder='NEET registration number*' 
                className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'>
                </input>

                {/* JEE */}
                <label for="jee"></label>
                <select 
                value={jee}
                onChange={function(e){
                    set_jee(e.target.value)
                }}
                id="jee" name="jee" className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                required>
                    <option value="">Registered for JEE?*</option>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>
                {/* jee number */}
                <input 
                value={jeeNum}
                onChange={function(e){
                    set_jeeNum(e.target.value)
                }}
                type='text' placeholder='JEE registration number*' 
                className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'>
                </input>

                {/* Mobile Number */}
                <input 
                    value={mobile}
                    onChange={function(e){
                        setMobile(e.target.value)
                    }}
                    type='number' placeholder='Mobile number* (for  future communication)' 
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>

                {/* Email */}
                <input 
                    value={email}
                    onChange={function(e){
                        setEmail(e.target.value)
                    }}
                    type='email' placeholder='Email* (for  future communication)' 
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>
                <p id='emailCheck' className='text-red-500 text-xs mt-5 mb-0'></p>
                <input
                    value={chkEmail}
                    className='border border-solid border-gray-500 w-full mx-auto px-2'
                    id='confirmEmail'
                    onChange={function(e){
                        setChkEmail(e.target.value)
                        if(e.target.value != email){
                            document.getElementById('emailCheck').innerHTML = "email do not match"
                        }else{
                            document.getElementById('emailCheck').innerHTML = ""

                        }
                    }}
                    type='email' placeholder='Confirm Email* (for  future communication)' 
                    required>
                </input>

                {/* Password */}
                <input 
                    value={password}
                    onChange={function(e){
                        setPassword(e.target.value)
                    }}
                    type='password' placeholder='Password*' 
                    className='border border-solid border-gray-500 w-full mx-auto px-2 mt-5'
                    required>
                </input>
                <p id='passwordCheck' className='text-red-500 text-xs mt-5 mb-0'></p>
                <input 
                    value={chkPass}
                    onChange={function(e){
                        setChkPass(e.target.value)
                        if(e.target.value != password){
                            document.getElementById('passwordCheck').innerHTML = "passwordword do not match"
                        }else{
                            document.getElementById('passwordCheck').innerHTML = ""
                        }
                    }}
                    type='password' placeholder='Confirm password*' 
                    className='border border-solid border-gray-500 w-full mx-auto px-2'
                    required>
                </input>
                
                <p id='emptyErrorMsg' className='text-red-500 text-xs mt-5 mb-0'></p>
                <button
                    type='submit' 
                    className='border border-solid border-gray-500 rounded w-1/3 py-1.5 hover:cursor-pointer mx-auto px-2  bg-yellow-400'>
                    Submit
                </button>

            </form>
        </>
    )
}

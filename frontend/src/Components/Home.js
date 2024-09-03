import {
	Link,
    useNavigate
} from "react-router-dom";
import React, { useState } from 'react'
import homebg from '../images/bg-img1.jpg'

export default function Home() {
	const [email, setemail] = useState('');
	const [password, setPassword] = useState('');


	const N = useNavigate()

	async function LoginUser(event) {
		event.preventDefault()
		const response = await fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
			
        })
		const data = JSON.stringify(await response.json())
		userdata = data
		const errordata = data.substring(12,30)
		if(errordata == 'Invalid credential'){
			alert('Invalid credential');
		}else{
			N('/User')
			
		}
	}


	return (
		<>
			<div className='realtive'>

				<div className='w-full h-1/4 absolute'>
					<img src={homebg} className='h-[430px] w-full' />
				</div>

				<div className='absolute w-5/6 ml-5 md:w-2/4 lg:w-1/4 bg-white bg-opacity-50 md:right-16 flex-col p-5 my-8 rounded-2xl '>
					<p className='text-center text-2xl font-bold'>
						Login
					</p>
					<p className='text-center text-sm mb-5'>
						Sign in to your account
					</p>
					<form className='w-full flex flex-col m-auto gap-5'>
						<input
						value={email}
						onChange={function(e){
							setemail(e.target.value)
						}}
						type='email' placeholder='Email' name='email' className='border-b-2 border-black rounded p-1.5'></input>
						<input 
						value={password}
						onChange={function(e){
							setPassword(e.target.value)
						}}
						type='password' placeholder='Password' name='password' className='border-b-2 border-black rounded p-1.5'></input>
						<div className='text-center mb-4'>
							<input onClick={LoginUser} type='submit' value={'Login'} className='w-full bg-black text-white p-1.5 rounded hover:cursor-pointer'></input>
							<a className='mt-0 block text-xs hover:cursor-pointer'>Forgot password</a>
						</div>
						<Link to="/Register"  className='bg-white p-1.5 rounded border-t-2 border-black hover:cursor-pointer text-center'>
							Register New User
						</Link>
					</form>
				</div>
			</div>
		</>
	)
}

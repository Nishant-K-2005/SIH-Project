import React from 'react'
import homebg from '../images/bg-img1.jpg'

export default function Home() {
	return (
		<>
			<div className='realtive'>

				<div className='w-full h-1/4 absolute'>
					<img src={homebg} className='h-[430px] w-full' />
				</div>

				<div className='absolute w-1/4 bg-white bg-opacity-50 right-20 flex-col p-5 my-8 rounded-2xl'>
					<p className='text-center text-2xl font-bold'>
						Login
					</p>
					<p className='text-center text-sm mb-5'>
						Sign in to your account
					</p>
					<form className='w-full flex flex-col m-auto gap-5'>
						<input type='email' placeholder='Email' name='email' className='border-b-2 border-black rounded p-1.5'></input>
						<input type='password' placeholder='Password' name='password' className='border-b-2 border-black rounded p-1.5'></input>
						<div className='text-center mb-4'>
							<input type='button' value={'Login'} className='w-full bg-black text-white p-1.5 rounded hover:cursor-pointer'></input>
							<a className='mt-0 block text-xs hover:cursor-pointer'>Forgot password</a>
						</div>
						<input type='button' value={'Register New Account'} className='bg-white p-1.5 rounded border-t-2 border-black hover:cursor-pointer'></input>
					</form>
				</div>
			</div>
		</>
	)
}

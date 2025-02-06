import React from 'react'
import FilledButton from '../Base/Buttons/FilledButton'

const Navbar = () => {
	return (
		<nav className='z-30 fixed flex bg-slate-900/10 w-full px-5 md:px-20 lg:px-32 py-2 items-center justify-between backdrop-blur'>
			<div className='flex items-center space-x-2 text-white font-title'>
				<img className='h-12' src="/images/logo.png" />
				<h1 className='font-bold text-xl'><span className='text-4xl text-indigo-400'>C</span>Analyser</h1>
			</div>

			<div className='flex items-center space-x-4'>
				<div className='flex items-center text-gray-300 *:hover:text-white *:duration-300 ease-linear space-x-4 *:list-none'>
					<li><a href="">Home</a></li>
					<li><a href="">Features</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Contact Us</a></li>
				</div>
				<FilledButton className="font-medium" text="Login" theme="primary" size="sm" rounded={false} onClick={() => window.location.href = "/auth/login"} />
			</div>
		</nav>
	)
}

export default Navbar
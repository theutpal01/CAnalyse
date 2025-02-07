import React from 'react'
import FilledButton from '../../Base/Buttons/FilledButton';
import ShadowButton from '../../Base/Buttons/ShadowButton';
import { Galaxy } from 'react-stars-particles';

const Hero = () => {
	return (
		<div className="w-full h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80 flex flex-col-reverse lg:flex-row lg:justify-between items-center justify-center px-5 md:px-20 lg:px-32 py-10">
			<div className='lg:w-7/12 space-y-6 z-10'>
				<h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-2xl text-white font-heading font-bold">Secure Your Cloud, Detect Threats Instantly!</h1>
				<p className='text-gray-300 lg:text-lg'>Monitor dependencies & vulnerabilities in real time with seamless cloud integration. Stay ahead of security risks with automated scanning and instant alerts. Protect your applications effortlessly—start today! </p>
				<div className='spacex-3 flex flex-row space-x-4'>
					<FilledButton className="font-medium" text='Analyse Now' theme="primary" rounded={true} />
					<ShadowButton text='Learn More' theme="secondary" rounded={true} />
				</div>
			</div>
			<div className='lg:w-auto z-10'>
				<img className='z-10 h-full object-contain' src="/images/hero.png" alt="cloud" />
			</div>
		</div>
	)
}

export default Hero;
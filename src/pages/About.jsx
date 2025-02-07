import React from 'react'
import SectionA from '../components/AboutSections/SectionA'
import SectionB from '../components/AboutSections/SectionB'
import SectionC from '../components/AboutSections/SectionC'

const About = () => {
	return (
		<div className='w-full min-h-screen bg-radial-[at_0%_100%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80 flex flex-col items-center justify-center px-5 md:px-20 lg:px-32 py-10'>
			<div className='z-10'>
				<h2 className='font-heading font-bold text-5xl text-white text-center'>About Us</h2>
				<p className='text-lg text-purple-200/70 text-center pb-10'>Join us in securing the future of cloud applications—one scan at a time!</p>
				<div className='w-full'>
					<SectionA />
					<SectionB />
					<SectionC />
				</div>
			</div>
		</div>
	)
}

export default About
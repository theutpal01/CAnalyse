import React from 'react'

const SectionC = () => {
	return (
		<div className='flex flex-col lg:flex-row justify-between py-10'>
			<div className='flex flex-col space-y-5 lg:w-1/2  justify-center'>
				<h3 className='text-2xl text-left font-medium text-white'>Our Vision</h3>
				<p className='text-lg text-purple-200/70'>We believe in making security simple, efficient, and accessible to everyone. Our goal is to help developers and organizations build secure, resilient applications without the complexity of manual audits.</p>
			</div>
			<div className='flex w-1/2 justify-end'>
				<div className='w-3/4 rounded-t-3xl font-stretch overflow-hidden rounded-bl-3xl shadow-2xl shadow-purple-500/50'>
					<img src='/images/three.jpg' alt='Section A' />
				</div>
			</div>
		</div>
	)
}

export default SectionC
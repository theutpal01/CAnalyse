

const SectionA = () => {
	return (
		<div className='flex flex-col lg:flex-row justify-between py-10'>
			<div className='flex flex-col space-y-3 lg:w-1/2  justify-center'>
				<h3 className='text-2xl text-left font-medium text-white'>Empowering Cloud Security with Smart Monitoring</h3>
				<p className='text-lg text-purple-200/70'>In today's digital landscape, security threats are evolving rapidly. Our mission is to provide seamless, real-time dependency and vulnerability monitoring for cloud applications, ensuring businesses and developers stay ahead of security risks.</p>
				
				<h3 className='text-2xl text-left font-medium text-white pt-5'>What We Do?</h3>
				<p className='text-lg text-purple-200/70'>We offer an automated, AI-powered security solution that scans, detects, and reports vulnerabilities in your cloud-based applications. Our platform integrates effortlessly with GitHub, GitLab, Bitbucket, and other cloud services, providing continuous security monitoring without disrupting your workflow.</p>
			</div>
			<div className='flex w-1/2 justify-end'>
				<div className='w-3/4 rounded-t-3xl font-stretch overflow-hidden rounded-bl-3xl shadow-2xl shadow-purple-500/50'>
					<img src='/images/one.jpg' alt='Section A' />
				</div>
			</div>
		</div>
	)
}

export default SectionA
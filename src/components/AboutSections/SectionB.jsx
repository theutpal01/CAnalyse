import { IoCloudCircleOutline } from "react-icons/io5";


const SectionB = () => {
	return (
		<div className='flex flex-col lg:flex-row-reverse justify-between py-10'>
			<div className='flex flex-col space-y-5 lg:w-1/2  justify-center'>
				<h3 className='text-2xl text-left font-medium text-white'>Why Choose Us?</h3>
				<div className="flex space-x-3 items-center">
					<IoCloudCircleOutline className="text-purple-400/70 text-3xl" />
					<p className='text text-purple-200/70'>
						Real-Time Vulnerability Scanning - Instantly detect risks in your application's dependencies.
					</p>
				</div>
				<div className="flex space-x-3 items-center">
					<IoCloudCircleOutline className="text-purple-400/70 text-3xl" />
					<p className='text text-purple-200/70'>
						Seamless Integration - Connect effortlessly with cloud platforms like GitHub, GitLab & Bitbucket.
					</p>
				</div>
				<div className="flex space-x-3 items-center">
					<IoCloudCircleOutline className="text-purple-400/70 text-3xl" />
					<p className='text text-purple-200/70'>
						Automated Alerts & Actionable Reports - Get notified of security threats and recommended fixes.
					</p>
				</div>
				<div className="flex space-x-3 items-center">
					<IoCloudCircleOutline className="text-purple-400/70 text-3xl" />
					<p className='text text-purple-200/70'>
						AI-Driven Threat Prioritization - Focuses on the most critical vulnerabilities first before anything.
					</p>
				</div>

			</div>
			<div className='flex w-1/2 justify-start'>
				<div className='w-3/4 rounded-t-3xl font-stretch overflow-hidden rounded-br-3xl shadow-2xl shadow-purple-500/50'>
					<img src='/images/two.jpg' alt='Section A' />
				</div>
			</div>
		</div>
	)
}

export default SectionB;
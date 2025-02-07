import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='relative flex flex-col bg-radial-[at_100%_0%] from-purple-300/95 via-60% via-purple-50/50 to-purple-50/10 items-center py-10'>
			<div className='w-full my-5 h-0.5 p-5 md:px-10 xl:px-20'>
				<div className='w-full bg-slate-300/50 h-0.5'></div>
			</div>
			<div className='flex w-full px-5 md:px-20 lg:px-32 justify-between items-center'>
				<div className='w-1/4 z-10'>
					<img className='w-3/4' src="/images/logo.png" alt="" />
					<p className='text-sm'>© {new Date().getFullYear()} CAnalyser, Inc. All rights reserved.</p>
				</div>
				<div className='w-1/2 grid grid-cols-3 gap-4 z-10'>
					<div className='flex flex-col space-y-2 *:w-fit'>
						<p className='font-medium'>Quick Links</p>
						<a className='hover:text-gray-600 text-sm active:text-black' href="">Features</a>
						<a className='hover:text-gray-600 text-sm active:text-black' href="">About Us</a>
						<a className='hover:text-gray-600 text-sm active:text-black' href="">Contact Us</a>
					</div>
					<div>
						<a href=""></a>
					</div>
					<div className='flex flex-col space-y-2 *:w-fit *:flex *:items-center *:space-x-2'>
						<p className='font-medium'>Socials</p>
						<a className='hover:text-gray-600 text-sm active:text-black' href=""><FaGithub /> <p>Github</p></a>
						<a className='hover:text-gray-600 text-sm active:text-black' href=""><FaLinkedin /><p>LinkedIn</p></a>
						<a className='hover:text-gray-600 text-sm active:text-black' href=""><FaInstagram /> <p>Instagram</p></a>
					</div>

				</div>


				<img src="/images/footer.png" className='object-left-bottom absolute left-0 bottom-0 z-0' />
			</div>
		</div>
	)
}

export default Footer
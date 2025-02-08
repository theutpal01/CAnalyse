import React from 'react'

const Form = ({ heading, onSubmit, children, className, ...rest }) => {
	return (
		<form onSubmit={onSubmit} className={`relative max-w-[350px] flex flex-col bg-purple-50 overflow-hidden min-w-full sm:min-w-md bg-radial-[at_100%_0%] from-purple-300/95 via-60% via-purple-50/50 to-purple-50/10 rounded-xl shadow-2xl shadow-indigo-900/50 min-h-[450px] justify-between ${className}`} {...rest}>
			<img src="/images/footer.png" className='object-left-bottom absolute left-0 bottom-0 z-0' />
			<h2 className='font-heading pt-5 font-bold text-purple-900 text-center text-3xl xl:text-4xl'>{heading}</h2>
			{children}
		</form>
	)
}

export default Form
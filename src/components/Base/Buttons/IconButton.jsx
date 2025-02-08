import React from 'react'

const IconButton = ({ text, theme = "primary", type = "button", size = "md", rounded, className, onClick, icon }) => {
	const themeClasses = {
		primary: "bg-purple-600 text-white",
		secondary: 'bg-secondary text-white',
		tertiary: 'bg-tertiary text-white',
		black: 'bg-black text-white',
	}

	const sizeClasses = {
		sm: 'p-2 px-4 text-sm',
		md: 'p-3 px-5 text-base',
		lg: 'p-4 px-6 text-lg',
	}

	return (
		<button type={type} className={`${className} ${rounded ? 'rounded-full' : ''} ${themeClasses[theme]} ${sizeClasses[size]} shadow-md hover:shadow-lg active:scale-95 hover:scale-105 duration-200 ease-linear cursor-pointer`} onClick={onClick}>
			<div className='flex items-center justify-center'>
				{icon}
				{text && <span className="ml-2">{text}</span>}
			</div>
		</button>
	)
}

export default IconButton;
import React from 'react'

const ShadowButton = ({ text, theme = "primary", type = "button", size = "md", rounded, className, onClick }) => {
	const themeClasses = {
		primary: "hover:bg-purple-600 text-gray-300 hover:text-white",
		secondary: 'hover:bg-secondary text-gray-300 hover:text-white',
		tertiary: 'hover:bg-tertiary text-gray-300 hover:text-white',
	}

	const sizeClasses = {
		sm: 'p-2 px-4 text-sm',
		md: 'p-3 px-5 text-base',
		lg: 'p-4 px-6 text-lg',
	}

	return (
		<button type={type} className={`${className} bg-black/10 ${rounded ? 'rounded-full' : ''} ${themeClasses[theme]} ${sizeClasses[size]} shadow-md hover:shadow-lg active:scale-95 hover:scale-105 duration-200 ease-linear cursor-pointer`} onClick={onClick}>
			{text}
		</button>
	)
}

export default ShadowButton;
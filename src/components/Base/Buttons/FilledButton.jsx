import React from 'react'

const FilledButton = ({ text, theme = "primary", type = "button", size = "md", rounded, className, onClick }) => {
	const themeClasses = {
		primary: "bg-purple-600 text-white",
		secondary: 'bg-secondary text-white',
		tertiary: 'bg-tertiary text-white',
	}

	const sizeClasses = {
		sm: 'p-2 px-4 text-sm',
		md: 'p-3 px-5 text-base',
		lg: 'p-4 px-6 text-lg',
	}

	return (
		<button type={type} className={`${className} ${rounded ? 'rounded-full' : ''} ${themeClasses[theme]} ${sizeClasses[size]} shadow-md hover:shadow-lg active:scale-95 hover:scale-105 duration-200 ease-linear cursor-pointer`} onClick={onClick}>
			{text}
		</button>
	)
}

export default FilledButton
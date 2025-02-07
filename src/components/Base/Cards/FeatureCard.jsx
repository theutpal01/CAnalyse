import React from 'react'

export const CardHead = ({ clasName, children }) => {
	return (

		<div className={`${clasName} text-xl text-center text-purple-200 font-medium font-heading`}>
			{children}
		</div>
	)
}

export const CardBody = ({ clasName, children }) => {
	return (

		<div className={`${clasName} text-sm text-purple-200 font-base text-justify`}>
			{children}
		</div>
	)
}

export const CardFooter = ({ clasName, children }) => {
	return (

		<div className={clasName}>
			{children}
		</div>
	)
}

export const FeatureCard = ({ className, children }) => {
	return (
		<div className={`rounded-tl-3xl rounded-br-3xl shadow-xl shadow-purple-500/20 p-5 bg-radial-[at_0%_0%] transition-all from-slate-950/95 via-55% via-indigo-950/95 hover:scale-110 duration-400 ease-in-out to-purple-900/80 max-w-72 space-y-7 ${className}`}>
			{children}
		</div>
	)
}
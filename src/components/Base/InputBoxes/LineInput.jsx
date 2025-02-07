import React from 'react'

const LineInput = ({ type, icon, text, className, name }) => {
	return (
		<div className="border-b-2 flex space-x-3 items-center border-slate-900/50 w-full">
			<span>{icon}</span>
			<input className={`${className} w-full text-slate-900 py-3 outline-none`} name={name} type={type} placeholder={text} />
		</div>
	)
}

export default LineInput;
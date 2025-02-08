import axios from 'axios';
import { useEffect, useContext, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import withGuest from '../../utils/withGuest';

const GithubRedirect = () => {
	const { setData } = useContext(AuthContext);
	const [searchParams] = useSearchParams();
	const token = searchParams.get('token');
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			return navigate('/auth/login');
		}

		if (token) {
			setData(token);
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}

	}, [token, navigate]);


	return (

		<div className='flex flex-col items-center justify-center h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80 space-y-8'>
			{!token && <p className='text-lg text-purple-200/70 text-center pb-10'>Open your gmail account and Click on continue to verify your email address.</p>}
			{token && <div className='flex flex-col space-y-6'><h3 className='font-heading font-bold text-5xl text-white text-center'>Authenticated using GitHub</h3><p className='text-lg text-purple-200/70 text-center pb-10'>You are being redirected to homepage in 3 seconds.</p></div>}
		</div>
	)
}

export default withGuest(GithubRedirect);
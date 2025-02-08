import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import withGuest from '../../utils/withGuest';

const Verify = () => {
	const [searchParams] = useSearchParams();
	const token = searchParams.get('token');
	const navigate = useNavigate();
	const [message, setMessage] = useState('Trying to verify the user...');
	const hasFetched = 	useRef(false); // Prevent duplicate API calls

	useEffect(() => {
		if (!token || hasFetched.current) {
			return;
		}

		hasFetched.current = true; // Mark API call as done

		axios
			.get(`http://localhost:5000/api/auth/verify-email/${token}`)
			.then((res) => {
				setMessage(res.data.message);
				setTimeout(() => {
					navigate('/auth/login');
				}, 3000);
			})
			.catch(() => setMessage("Invalid or expired token."));
	}, [token, navigate]);


	return (

		<div className='flex flex-col items-center justify-center h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80 space-y-8'>
			<h2 className='font-heading font-bold text-5xl text-white text-center'>Verify your Email</h2>
			{!token && <p className='text-lg text-purple-200/70 text-center pb-10'>Open your gmail account and Click on continue to verify your email address.</p>}
			{token && <p className='text-lg text-purple-200/70 text-center pb-10'>{message}</p>}
		</div>
	)
}

export default withGuest(Verify);
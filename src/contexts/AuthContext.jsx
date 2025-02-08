import { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setUser(token);
		}
	}, []);

	const login = async (userData) => {
		try {
			const { data } = await loginUser(userData);
			setData(data.token);
			return { code: "success", message: "Logged in successfully!" };
		} catch (error) {
			console.error(error.response?.data?.message || 'Login failed');
			return { code: "error", message: (error.response?.data?.message || 'Login failed') };
		}
	};

	const setData = (token) => {
		localStorage.setItem('token', token);
	};

	return (
		<AuthContext.Provider value={{ user, login, setData }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

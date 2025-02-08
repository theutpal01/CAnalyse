import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'
import { Galaxy } from 'react-stars-particles'
import { Toaster } from "react-hot-toast"
import AuthProvider from './contexts/AuthContext'
import Verify from './pages/auth/Verify'
import Update from './pages/auth/Update'
import GithubRedirect from './pages/auth/GithubRedirect'
import PrivateRoute from './pages/PrivateRoute'

const App = () => {
	return (
		<div className="font-base antialiased">
			<Galaxy key={Math.random()}
				quantity={100}
				attract={0.1}
				repulse={0.1}
				color="#ddd"
			/>
			<Toaster />
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/auth/login" element={<Login />} />
						<Route path="/auth/register" element={<Register />} />
						<Route path="/auth/verify-email" element={<Verify />} />
						<Route path="/auth/reset" element={<Reset />} />
						<Route path="/auth/reset-password" element={<Update />} />
						<Route path="/auth/github" element={<GithubRedirect />} />
						<Route element={<PrivateRoute />}>
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	)
}

export default App

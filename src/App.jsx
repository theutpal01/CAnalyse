import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import React from 'react'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'
import { Galaxy } from 'react-stars-particles'

const App = () => {
	return (
		<div className="font-base antialiased">
			<Galaxy key={Math.random()}
				quantity={100}
				attract={0.1}
				repulse={0.1}
				color="#ddd"
			/>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/register" element={<Register />} />
					<Route path="/auth/reset" element={<Reset />} />
					{/* <Route path="/auth/verify" element={<Register />} /> */}
					{/* <Route path="/about" element={<h1>About</h1>} /> */}
				</Routes>
			</Router>
		</div>
	)
}

export default App

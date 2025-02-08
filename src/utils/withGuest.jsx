import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withGuest = (WrappedComponent) => {
	return (props) => {
		const navigate = useNavigate();
		const token = localStorage.getItem("token");

		useEffect(() => {
			if (token) {
				navigate("/"); // Redirect logged-in users to dashboard
			}
		}, [token, navigate]);

		// If user is not logged in, allow access
		return !token ? <WrappedComponent {...props} /> : null;
	};
};

export default withGuest;

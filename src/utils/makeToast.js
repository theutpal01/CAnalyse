import toast from "react-hot-toast";

export const makeSuccessToast = (text) => {
	return toast(text, {
		duration: 3000,
		position: "bottom-right",
		style: {
			backgroundColor: "#10B981", color: "#fff"
		},
		ariaProps: {
			role: "status",
			"aria-live": "polite",
		},

		removeDelay: 1000,
	});
};

export const makeWarningToast = (text) => {
	return toast(text, {
		duration: 3000,
		position: "bottom-right",
		style: {
			backgroundColor: "#F59E0B", color: "#fff"
		},
		ariaProps: {
			role: "status",
			"aria-live": "polite",
		},

		removeDelay: 1000,
	});
};

export const makeInfoToast = (text) => {
	return toast(text, {
		duration: 3000,
		position: "bottom-right",
		style: { backgroundColor: "#3B82F6", color: "#fff" },
		ariaProps: {
			role: "status",
			"aria-live": "polite",
		},

		removeDelay: 1000,
	});
};

export const makeErrorToast = (text) => {
	return toast(text, {
		duration: 3000,
		position: "bottom-right",
		style: { backgroundColor: "#EF4444", color: "#fff" },
		ariaProps: {
			role: "status",
			"aria-live": "polite",
		},

		removeDelay: 1000,
	});
};

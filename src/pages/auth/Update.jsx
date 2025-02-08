import { MdOutlineKey } from "react-icons/md"
import Form from "../../components/Base/Cards/Form";
import LineInput from "../../components/Base/InputBoxes/LineInput";
import FilledButton from "../../components/Base/Buttons/FilledButton";
import { makeErrorToast, makeSuccessToast } from "../../utils/makeToast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../services/api";
import { useState } from "react";
import withGuest from "../../utils/withGuest";

const Update = () => {
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");
	const [searchParams] = useSearchParams();
	const token = searchParams.get('token');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!password || !cPassword) {
			makeErrorToast("All fields are required");
			return;
		}

		if (password !== cPassword) {
			makeErrorToast("Passwords do not match");
			return;
		}

		try {
			const res = await resetPassword(token, password);
			console.log(res);
			if (res.data?.code === "success") {
				makeSuccessToast(res.data?.message);
				setTimeout(() => {
					navigate('/auth/login');
				}, 2000);
			} else {
				makeErrorToast(res.data?.message);
			}
		} catch (error) {
			makeErrorToast(error.response?.data?.message || 'Password update failed');
		}
	}

	return (
		<>
			{token && <div className="flex items-center justify-center h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80">
				<Form onSubmit={handleSubmit} className={"text-center px-5 h-full sm:h-fit"} heading={"Update Password"}>
					<div className="flex flex-col space-y-5 px-5 items-center z-10 py-10">
						<LineInput
							icon={<MdOutlineKey className="text-purple-900/70" />}
							text="Enter Password..."
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<LineInput
							icon={<MdOutlineKey className="text-purple-900/70" />}
							text="Enter Password..."
							type="password"
							name="cPassword"
							value={cPassword}
							onChange={(e) => setCPassword(e.target.value)}
						/>
						<FilledButton
							className={"mt-3 px-10 w-48 font-bold"}
							text={"Send Mail"}
							rounded={true}
							onClick={handleSubmit}
						/>
					</div>
					<div className="p-5 text-sm space-y-1 flex-col items-end justify-end flex w-full z-10">
						<p>
							Already have account!{" "}
							<a href="/auth/login" className="text-purple-600">
								Sign In
							</a>
						</p>
					</div>
				</Form>
			</div>}
		</>
	);
};

export default withGuest(Update);

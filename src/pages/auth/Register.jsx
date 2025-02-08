import { MdOutlineEmail, MdFace2, MdOutlineSupervisedUserCircle, MdOutlineKey } from "react-icons/md"
import Form from "../../components/Base/Cards/Form";
import LineInput from "../../components/Base/InputBoxes/LineInput";
import FilledButton from "../../components/Base/Buttons/FilledButton";
import IconButton from "../../components/Base/Buttons/IconButton";
import { makeErrorToast, makeSuccessToast } from "../../utils/makeToast";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { registerUser } from "../../services/api";
import { loginWithGithub } from "../../utils/loginWithGithub";
import withGuest from "../../utils/withGuest";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		if (!name || !email || !password || !cPassword) {
			makeErrorToast("All fields are required");
			return;
		}

		if (password !== cPassword) {
			makeErrorToast("Passwords do not match");
			return;
		}

		try {
			await registerUser({ name, email, password });
			makeSuccessToast('Registered! Please verify your email.');
		} catch (error) {
			makeErrorToast(error.response?.data?.message || 'Registration failed');
		}
	}

	return (
		<div className="flex items-center justify-center h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80">
			<Form onSubmit={handleRegister} className={"text-center px-5 h-full sm:h-fit"} heading={"Register"} action="/register">
				<div className="flex flex-col space-y-5 px-5 items-center z-10 py-10">
					<LineInput
						icon={<MdOutlineSupervisedUserCircle className="text-purple-900/70" />}
						text="Enter Name..."
						type="text"
						name="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<LineInput
						icon={<MdOutlineEmail className="text-purple-900/70" />}
						text="Enter Email..."
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
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
						text="Confirm Password..."
						type="password"
						name="cpassword"
						value={cPassword}
						onChange={(e) => setCPassword(e.target.value)}
					/>
					<div>
						<FilledButton id="registerBtn"
							className={"mt-3 px-10 w-48 font-bold"}
							text={"Sign Up"}
							rounded={true}
							onClick={handleRegister}
						/>
						<IconButton onClick={() => loginWithGithub()} theme="black" className={"mt-3 px-10 w-48 font-bold"} text={"Login"} icon={<FaGithub />} rounded={true} />
					</div>
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
		</div>
	);
};

export default withGuest(Register);

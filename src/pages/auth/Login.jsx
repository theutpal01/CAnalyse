import { MdOutlineEmail, MdOutlineKey } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import Form from '../../components/Base/Cards/Form'
import LineInput from '../../components/Base/InputBoxes/LineInput'
import FilledButton from '../../components/Base/Buttons/FilledButton'
import { makeErrorToast, makeSuccessToast, makeWarningToast } from "../../utils/makeToast"
import IconButton from "../../components/Base/Buttons/IconButton"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { loginWithGithub } from "../../utils/loginWithGithub"
import withGuest from "../../utils/withGuest"

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			makeErrorToast("All fields are required");
			return;
		}

		const res = await login({ email, password });

		if (res.code === "success") {
			makeSuccessToast(res.message);
		} else {
			makeErrorToast(res.message);
		}
	};

	return (
		<div className='flex items-center justify-center h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80'>
			<Form onSubmit={handleSubmit} className={"text-center px-5 h-full sm:h-fit"} heading={"Login"}>
				<div className='flex flex-col space-y-5 px-5 items-center z-10 py-10'>
					<LineInput icon={<MdOutlineEmail className="text-purple-900/70" />} text="Enter Email..." type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<LineInput icon={<MdOutlineKey className="text-purple-900/70" />} text="Enter Password..." type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<div>
						<FilledButton onClick={handleSubmit} className={"mt-3 px-10 w-48 font-bold"} text={"Sign In"} rounded={true} />
						<IconButton onClick={() => loginWithGithub() } theme="black" className={"mt-3 px-10 w-48 font-bold"} text={"Login"} icon={<FaGithub />} rounded={true} />
					</div>
				</div>
				<div className="p-5 text-sm space-y-1 flex-col items-end justify-end flex w-full z-10">
					<p>Forget password?{" "}<a href="/auth/reset" className="text-purple-600">Reset now</a></p>
					<p>Not having an account!{" "}<a href="/auth/register" className="text-purple-600">Create now</a></p>
				</div>
			</Form>
		</div>
	)
}

export default withGuest(Login);
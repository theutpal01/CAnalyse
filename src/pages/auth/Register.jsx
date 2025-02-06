import { MdOutlineEmail, MdFace2, MdOutlineSupervisedUserCircle, MdOutlineKey } from "react-icons/md"
import Form from "../../components/Base/Cards/Form";
import LineInput from "../../components/Base/InputBoxes/LineInput";
import FilledButton from "../../components/Base/Buttons/FilledButton";

const Register = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80">
			<Form className={"text-center px-5 h-full sm:h-fit"} heading={"Register"} action="/register">
				<div className="flex flex-col space-y-5 px-5 items-center z-10 py-10">
					<LineInput
						icon={<MdFace2 className="text-purple-900/70" />}
						text="Enter Username..."
						type="text"
						name="text"
					/>
					<LineInput
						icon={<MdOutlineSupervisedUserCircle className="text-purple-900/70" />}
						text="Enter Name..."
						type="text"
						name="text"
					/>
					<LineInput
						icon={<MdOutlineEmail className="text-purple-900/70" />}
						text="Enter Email..."
						type="email"
						name="email"
					/>
					<LineInput
						icon={<MdOutlineKey className="text-purple-900/70" />}
						text="Enter Password..."
						type="password"
						name="password"
					/>
					<FilledButton
						className={"mt-3 px-10 w-48 font-bold"}
						text={"Sign Up"}
						rounded={true}
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
		</div>
	);
};

export default Register;

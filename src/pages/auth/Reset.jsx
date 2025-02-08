import { MdOutlineEmail } from "react-icons/md"
import Form from "../../components/Base/Cards/Form";
import LineInput from "../../components/Base/InputBoxes/LineInput";
import FilledButton from "../../components/Base/Buttons/FilledButton";
import { useState } from "react";
import { forgotPassword } from "../../services/api";
import { makeErrorToast, makeSuccessToast } from "../../utils/makeToast";
import withGuest from "../../utils/withGuest";

const Reset = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email) {
			makeErrorToast("All fields are required");
			return;
		}

		const res = await forgotPassword(email);
		console.log(res);
		if (res.data?.code === "success") {
			makeSuccessToast(res.data?.message);
		} else {
			makeErrorToast(res.data?.message);
		}
	}

	return (
		<div className="flex items-center justify-center h-screen bg-radial-[at_0%_0%] from-slate-950/95 via-55% via-indigo-950/95 to-purple-900/80">
			<Form onSubmit={handleSubmit} className={"text-center px-5 h-full sm:h-fit"} heading={"Reset Password"} action="/register">
				<div className="flex flex-col space-y-5 px-5 items-center z-10 py-10">
					<LineInput
						icon={<MdOutlineEmail className="text-purple-900/70" />}
						text="Enter Email..."
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
		</div>
	);
};

export default withGuest(Reset);

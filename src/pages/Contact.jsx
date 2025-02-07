import Form from "../components/Base/Cards/Form";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineMarkEmailRead, MdOutlinePhone, MdOutlineSmartphone, MdOutlineSmartToy, MdOutlineSupervisedUserCircle, MdOutlineVerifiedUser } from "react-icons/md";
import LineInput from "../components/Base/InputBoxes/LineInput";
import FilledButton from "../components/Base/Buttons/FilledButton";
import LineTextArea from "../components/Base/InputBoxes/LineTextArea";

const Contact = () => {
	return (
		<div>
			<div className='w-full min-h-screen bg-radial-[at_100%_100%] from-purple-300/95 via-60% via-purple-50/50 to-purple-50/10 flex flex-col items-center justify-center px-5 md:px-20 lg:px-32 py-10'>
				<div className='w-full z-10 spcae-y-5'>
					<h2 className='font-heading font-bold text-5xl text-purple-950/80 text-center pb-5'>We're Here to Help!</h2>
					<div className='w-full py-10 space-x-10 flex justify-center md:justify-between flex-col lg:flex-row'>
						<div className="max-w-[600px] flex justify-center md:justify-start flex-col *:flex *:items-center *:py-2 pb-10 md:pb-2">
							<p className="text-slate-700 text-lg text-justify">Have questions, need support, or want to learn more about our cloud security service? Get in touch with us—we'd love to hear from you!</p>

							<p className="flex space-x-3 text-indigo-900"><FaRegAddressBook className="text-xl text-purple-700" /><span>VIT Vellore, Katpadi, Tamil Nadu, India</span></p>
							<p className="flex space-x-3 text-indigo-900"><MdOutlineMarkEmailRead className="text-xl text-purple-700" /><a href="mailto:support@canalyse.com">support@canalyse.com</a></p>
							<p className="flex space-x-3 text-indigo-900"><MdOutlinePhone className="text-xl text-purple-700" /><span>+91 7451 91XXXX</span></p>
						</div>
						<div className="w-full flex justify-center md:justify-end">
							<Form heading={"Contact Us"} className={"p-5"}>
								<div className="z-10 w-10/12 self-center space-y-3">
									<LineInput icon={<MdOutlineSupervisedUserCircle className="text-purple-900/70" />} text="Enter Name..." type="name" name="name" />
									<LineInput icon={<MdOutlineEmail className="text-purple-900/70" />} text="Enter Email..." type="email" name="email" />
									<LineTextArea text="Enter Message..." type="text" name="message" />
								</div>
								<div className="z-10 w-full flex justify-center py-5">
									<FilledButton text={"Send Mail"} rounded={true} className={"px-10 font-medium"} />
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
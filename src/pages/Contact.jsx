import { useState, useEffect } from 'react';

const Contact = () => {
	const [isValid, setIsValid] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		accept: false,
	});
	let name = 'Joy Okwudire';

	const onChange = (e) => {
		if (e.target.name === 'accept') {
			setFormData({ ...formData, [e.target.name]: !formData.accept });
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData({ firstName: '', lastName: '', email: '', message: '', accept: false });
	};
	return (
		<section className="mt-[54px] w-full max-w-[720px] px-3">
			<h1 className="text-[36px] font-semibold mb-5">Contact Me</h1>
			<p className="text-[#475467] text-[20px] mb-[48px]">
				Hi there, contact me to ask me about anything you have in mind.
			</p>

			<form className="w-full" onSubmit={handleSubmit}>
				<div className="grid grid-cols-12 gap-[24px] w-full mb-[24px]">
					<div className="flex flex-col col-span-12 md:col-span-6">
						<label className="text-[#344054]" htmlFor="first_name">
							First name
						</label>
						<input
							type="text"
							id="first_name"
							name="firstName"
							placeholder="Enter your first name"
							onChange={onChange}
							value={formData.firstName}
							required
							className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:valid:border-[#84CAFF] focus:invalid:border-[#F89687] outline-none d-shadow placeholder:text-[#667085]"
						/>
					</div>

					<div className="flex flex-col col-span-12 md:col-span-6">
						<label className="text-[#344054]" htmlFor="last_name">
							Last name
						</label>
						<input
							type="text"
							id="last_name"
							name="lastName"
							placeholder="Enter your last name"
							onChange={onChange}
							value={formData.lastName}
							required
							className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:valid:border-[#84CAFF] focus:invalid:border-[#F89687] outline-none d-shadow placeholder:text-[#667085]"
						/>
					</div>
				</div>

				<div className="flex flex-col col-span-12 md:col-span-6 mb-[24px]">
					<label className="text-[#344054]" htmlFor="email">
						Email
					</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="yourname@email.com"
						onChange={onChange}
						value={formData.email}
						required
						className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:valid:border-[#84CAFF] focus:invalid:border-[#F89687] outline-none d-shadow placeholder:text-[#667085]"
					/>
				</div>

				<div className="flex flex-col col-span-12 md:col-span-6 mb-[24px]">
					<label className="text-[#344054]" htmlFor="message">
						Message
					</label>
					<textarea
						type="text"
						id="message"
						name="message"
						placeholder="Send me a message and I'll reply you as soon as possible..."
						onChange={onChange}
						value={formData.message}
						required
						className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:valid:border-[#84CAFF] focus:invalid:border-[#F89687] outline-none h-[132px] d-shadow placeholder:text-[#667085]"
					/>
				</div>

				<div className="flex gap-2 mb-[32px]">
					<input
						type="checkbox"
						id="accept"
						name="accept"
						onChange={onChange}
						checked={formData.accept}
						required
						className="w-[20px] h-[20px] mt-[2px] d-shadow rounded-md border border-[#D0D5DD]"
					/>
					<label className="text-[#475467]" htmlFor="accept">
						You agree to providing your data to {name} who may contact you.
					</label>
				</div>

				<button
					type="submit"
					className="text-white bg-[#1570EF] py-[12px] rounded-[8px] w-full disabled:bg-[#B2DDFF]"
					id="btn__submit"
				>
					Send message
				</button>
			</form>
		</section>
	);
};

export default Contact;

const Contact = () => {
	return (
		<section className="mt-[54px] w-full max-w-[720px] px-3">
			<h1 className="text-[36px] font-semibold mb-5">Contact Me</h1>
			<p className="text-[#475467] text-[20px] mb-[48px]">
				Hi there, contact me to ask me about anything you have in mind.
			</p>

			<form className="w-full">
				<div className="grid grid-cols-12 gap-[24px] w-full mb-[24px]">
					<div className="flex flex-col col-span-12 md:col-span-6">
						<label className="text-[#344054]" htmlFor="first_name">
							First name
						</label>
						<input
							type="text"
							id="first_name"
							placeholder="Enter your first name"
							className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none"
						/>
					</div>

					<div className="flex flex-col col-span-12 md:col-span-6">
						<label className="text-[#344054]" htmlFor="last_name">
							Last name
						</label>
						<input
							type="text"
							id="last_name"
							placeholder="Enter your last name"
							className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none"
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
						placeholder="yourname@email.com"
						className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none"
					/>
				</div>

				<div className="flex flex-col col-span-12 md:col-span-6 mb-[24px]">
					<label className="text-[#344054]" htmlFor="message">
						Message
					</label>
					<textarea
						type="text"
						id="message"
						placeholder="Send me a message and I'll reply you as soon as possible..."
						className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none h-[132px]"
					/>
				</div>

				<div className="flex gap-2 mb-[32px]">
					<input type="checkbox" className="w-[20px] h-[20px] mt-[2px]" />
					<label className="text-[#475467]">You agree to providing your data to Joy who may contact you.</label>
				</div>

				<button type="submit" className="text-white bg-[#1570EF] py-[12px] rounded-[8px] w-full" id="btn__submit">
					Send message
				</button>
			</form>
		</section>
	);
};

export default Contact;

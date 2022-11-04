const Footer = () => {
	return (
		<footer className="mt-[100px] mx-[16px]">
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-[900px] w-full mx-auto gap-[16px] border-t border-dashed py-10">
				<a href="https://internship.zuri.team/" target="_blank" rel="noreferrer">
					<img src="/zuri-logo.svg" alt="zuri logo" />
				</a>
				<p className="text-[#667085] text-base">HNG Internship 9 Frontend Task</p>
				<a href="https://ingressive.org/" target="_blank" rel="noreferrer">
					<img src="/I4g-logo.svg" alt="I4G logo" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;

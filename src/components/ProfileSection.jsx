import { useState } from 'react';

const ProfileSection = () => {
	const [overlay, setOverlay] = useState(false);
	return (
		<div className="relative w-full px-[16px] mx-auto max-w-[700px] flex flex-col items-center">
			<div className="w-[40px] h-[40px] rounded-full border border-dashed border-[#D0D5DD] flex items-center justify-center absolute right-[16px] sm:right-[80px] top-[-20px] cursor-pointer hover:bg-[#D0D5DD]">
				<img src="/share-icon.svg" alt="share-icon" className="hidden sm:block" />
				<img src="/dots-icon.svg" alt="share-icon" className="sm:hidden" />
			</div>

			<div
				className="relative w-[88px] h-[88px] rounded-full cursor-pointer mb-[24px]"
				onMouseEnter={() => setOverlay(true)}
				onMouseLeave={() => setOverlay(false)}
			>
				<img src="/dp.jpg" id="profile__img" className="w-[88px] h-[88px] rounded-full" alt="my photo" />
				{overlay && (
					<div className="bg-[#344054BF] h-[88px] w-[88px] rounded-full flex justify-center items-end pb-3 absolute top-0">
						<img src="/camera-icon.svg" alt="camera" />
					</div>
				)}
			</div>

			<p id="twitter" className="mb-[24px] text-[20px] font-bold text-[#101828]">
				Chizycodes
			</p>
			<p id="slack" className="mb-[24px] text-[20px] font-bold text-[#101828] hidden">
				Chizycodes
			</p>
		</div>
	);
};

export default ProfileSection;

import React from 'react';
import { Link } from 'react-router-dom';

const links = [
	{
		name: 'Twitter Link',
		url: 'https://twitter.com/chizycodes',
		id: 'twitter__link',
	},
	{
		name: 'Zuri Team',
		url: 'https://training.zuri.team/',
		id: 'btn__zuri',
	},
	{
		name: 'Zuri Books',
		url: 'http://books.zuri.team',
		id: 'books',
	},
	{
		name: 'Python Books',
		url: 'https://books.zuri.team/python-for-beginners?ref_id=Chizycodes',
		id: 'book__python',
	},
	{
		name: 'Background Check for Coders',
		url: 'https://background.zuri.team',
		id: 'pitch',
	},
	{
		name: 'Design Books',
		url: 'https://books.zuri.team/design-rules',
		id: 'book__design',
	},
];

const LinksSection = () => {
	return (
		<div className="flex flex-col w-full items-center px-[16px]">
			{links.map((link, idx) => {
				return (
					<a
						href={link.url}
						key={idx}
						id={link.id}
						rel="noreferrer"
						target="_blank"
						className="bg-[#EAECF0] py-[24px] w-full max-w-[700px] mb-[24px] rounded-[8px] text-center text-[18px] text-[#101828] font-[500] hover:bg-[#D0D5DD]"
					>
						{link.name}
					</a>
				);
			})}
			<Link
				to="/contact"
				id="contact"
				className="bg-[#EAECF0] py-[24px] w-full max-w-[700px] mb-[24px] rounded-[8px] text-center text-[18px] text-[#101828] font-[500] hover:bg-[#D0D5DD]"
			>
				Contact Me
			</Link>
		</div>
	);
};

export default LinksSection;

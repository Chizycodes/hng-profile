import LinksSection from '../components/LinksSection';
import ProfileSection from '../components/ProfileSection';
import Socials from '../components/Socials';

const Home = () => {
	return (
		<main className="pt-[64px] pb-[34px] w-full">
			<section>
				<ProfileSection />
			</section>

			<section className="">
				<LinksSection />
			</section>

			<section className="">
				<Socials />
			</section>
		</main>
	);
};

export default Home;

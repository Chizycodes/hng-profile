import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function App() {
	return (
		<div className="flex flex-col w-full items-center">
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="contact" element={<Contact />} />

				<Route path="*" element={<Home />} />
			</Routes>

			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
}

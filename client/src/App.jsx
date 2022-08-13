import { useState } from "react";
import Navabr from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Transactions from './components/Transactions/Transactions';

const App = () => {
	return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<Navabr />
				<Welcome />
			</div>
			<Services />
			<Transactions />
			<Footer />
		</div>
	);
}

export default App;

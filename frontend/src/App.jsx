import HomePage from "./components/HomePage";
import Employees from "./components/Employees";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
	return (
		<>
			<nav>
				<Link to="/">Etusivu</Link>
				<Link to="/employees">Henkilöt</Link>
				<Link to="/projects">Projektit</Link>
				<Link to="/contact">Yhteystiedot</Link>
			</nav>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/employees" element={<Employees />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

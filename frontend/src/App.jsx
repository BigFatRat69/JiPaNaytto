import HomePage from "./components/HomePage";
import Employees from "./components/Employees";
import Projects from "./components/Projects";
import Contact from "./components/ContactAlt";
import logo from "./assets/JIPA_logo.jpg";
import { Routes, Route, NavLink } from "react-router-dom";

import { Navbar, Nav, Container, Image } from "react-bootstrap";
import Footer from "./components/Footer";

export default function App() {
	const fontColor = { color: "#8042D1" };

	return (
		<>
			<Navbar bg="light" expand="lg" sticky="top">
				<Container>
					<Navbar.Brand as={NavLink} to="/" className="brand-logo">
						<Image src={logo} height="40" alt="JIPA logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto" variant="underline">
							<Nav.Link as={NavLink} to="/" style={fontColor}>
								Etusivu
							</Nav.Link>
							<Nav.Link as={NavLink} to="/employees" style={fontColor}>
								Henkilöt
							</Nav.Link>
							<Nav.Link as={NavLink} to="/projects" style={fontColor}>
								Projektit
							</Nav.Link>
							<Nav.Link as={NavLink} to="/contact" style={fontColor}>
								Yhteystiedot
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container className="mt-4">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/employees" element={<Employees />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Container>
			<Footer />
		</>
	);
}

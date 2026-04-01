import HomePage from "./components/HomePage";
import Employees from "./components/Employees";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import logo from "./assets/JIPA_logo.jpg";
import { Routes, Route, NavLink } from "react-router-dom";

import { Navbar, Nav, Container, Image } from "react-bootstrap";

export default function App() {
	return (
		<>
			<Navbar bg="secondary" variant="dark" expand="lg" sticky="top">
				<Container>
					<Navbar.Brand as={NavLink} to="/">
						<Image src={logo} height="40" alt="JIPA logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto" variant="underline">
							<Nav.Link as={NavLink} to="/">
								Etusivu
							</Nav.Link>
							<Nav.Link as={NavLink} to="/employees">
								Henkilöt
							</Nav.Link>
							<Nav.Link as={NavLink} to="/projects">
								Projektit
							</Nav.Link>
							<Nav.Link as={NavLink} to="/contact">
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
		</>
	);
}

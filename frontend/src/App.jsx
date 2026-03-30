import HomePage from "./components/HomePage";
import Employees from "./components/Employees";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

export default function App() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/">JIPA</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">Etusivu</Nav.Link>
							<Nav.Link as={Link} to="/employees">Henkilöt</Nav.Link>
							<Nav.Link as={Link} to="/projects">Projektit</Nav.Link>
							<Nav.Link as={Link} to="/contact">Yhteystiedot</Nav.Link>
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
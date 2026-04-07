import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import logo from "../assets/JIPA_logo.jpg";

export default function Footer() {
	const fontColor = { color: "#8042D1" };

	return (
		<footer style={{ backgroundColor: "#f8f9fa", marginTop: 80 }}>
			<Container fluid style={{ padding: 30, borderTop: "1px solid #cacaca" }}>
				<Row className="mb-4">
					<Col md={4}>
						<Stack gap={3}>
							<Image src={logo} style={{ width: 180 }} />
							<h4 style={fontColor}>Jyväskylän Insinööripalvelu Oy</h4>
							<div>Y-tunnus: 10319898</div>
							<div>Engineering services and consulting</div>
						</Stack>
					</Col>
					<Col md={3}>
						<Stack gap={2}>
							<h5 style={fontColor}>Osoite</h5>
							<div>Kirrintie 11</div>
							<div>40270 Jyväskylä</div>
							<div>Suomi</div>
						</Stack>
					</Col>
					<Col md={3}>
						<Stack gap={2}>
							<h5 style={fontColor}>Yhteystiedot</h5>
							<div>etunimi.sukunimi@jipa.fi</div>
							<div>+358 40 123 4567</div>
						</Stack>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
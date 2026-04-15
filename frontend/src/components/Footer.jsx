import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import logo from "../assets/JIPA_logo.jpg";

export default function Footer() {
	return (
		<footer style={{ backgroundColor: "#f8f9fa", marginTop: 80 }}>
			<Container fluid style={{ padding: 30, borderTop: "1px solid #cacaca" }}>
				<Row className="mb-4">
					<Col md={7}>
						<Stack gap={3}>
							<Image src={logo} style={{ width: 180 }} />
							<h4 className="purple-font">Jyväskylän Insinööripalvelu Oy</h4>
							<div>Y-tunnus: 3499989-5</div>
						</Stack>
					</Col>
					<Col md={2}>
						<Stack gap={2}>
							<h5 className="purple-font">Osoite</h5>
							<div>Kirrintie 11</div>
							<div>40270 Jyväskylä</div>
							<div>Suomi</div>
						</Stack>
					</Col>
					<Col md={2}>
						<Stack gap={2}>
							<h5 className="purple-font">Yhteystiedot</h5>
							<div>etunimi.sukunimi@jipa.fi</div>
						</Stack>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

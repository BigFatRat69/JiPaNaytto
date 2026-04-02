import { Container, Stack, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/JIPA_logo.jpg";

export default function Footer() {
	const fontColor = { color: "#8042D1" };

	return (
		<footer>
			<Container
				fluid
				style={{
					borderTop: "1px solid lightgray",
					padding: 40,
				}}
			>
				<Row>
					<Col xs={8}>
						<Stack gap={3}>
							<h3 style={fontColor}>Jyväskylän Insinööripalvelu Oy</h3>
							<div>y-tunnus: 103i19898</div>
						</Stack>
					</Col>
					<Col xs={2}>
						<Stack gap={2}>
							<h3 style={fontColor}>Osoite</h3>
							<div>Kirrintie 11</div>
							<div>40270 Jyväskylä</div>
						</Stack>
					</Col>
					<Col xs={2}>
						<Stack gap={3}>
							<h3 style={fontColor}>Sähköposti</h3>
							<div>etunimi.sukunimi@jipa.fi</div>
						</Stack>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

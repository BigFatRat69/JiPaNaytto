import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../assets/contact-bg.jpg";
import { Link } from "react-router-dom";

export default function Contact() {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "300px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "white",
				}}
			>
				<h1 style={{ fontSize: "48px", fontWeight: "300", letterSpacing: "3px" }}>
					Yhteystiedot
				</h1>
			</div>

			<div style={{ backgroundColor: "white", padding: "80px 0" }}>
				<Container>
					<Row>
						<Col md={6}>
							<h4 style={{ fontWeight: "400", marginBottom: "20px" }}>
								Jyväskylän Insinööripalvelu Oy
							</h4>

							<p>
								Kirrintie 11
								<br />
								40270 Jyväskylä
							</p>

							<p>etunimi.sukunimi@jipa.fi</p>

							<p>
								<Link to="/employees">Puhelinnumerot henkilöittäin</Link>
							</p>
						</Col>

						<Col md={6}>
							<h4 style={{ fontWeight: "400", marginBottom: "20px" }}>Laskutus</h4>

							<p>
								Verkkolaskutusosoite
								<br />
								003734999895
							</p>

							<p>
								Välittäjän nimi
								<br />
								Apix Messaging Oy
							</p>

							<p>
								Operaattoritunnus
								<br />
								003723327487
							</p>

							<p>
								Maksuehto
								<br />
								30 pv tai sopimuksen mukaan
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

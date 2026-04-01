import { Container, Card } from "react-bootstrap";
import backgroundImage from "../assets/contact-bg.jpg";
import { Link } from "react-router-dom";

export default function Contact() {
	return (
		<div
			className="section-light"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				padding: "100px 0",
			}}
		>
			<Container className="py-5">
				<h1 className="mb-5 text-center text-white">Yhteystiedot</h1>

				<Card className="p-4 shadow-sm mb-4 border-0 contact-card">
					<Card.Body className="text-center">
						<Card.Title className="text-white">
							Jyväskylän Insinööripalvelu Oy
						</Card.Title>
						<Card.Text className="text-white">
							<strong>Osoite:</strong> Kirrintie 11, 40270 Jyväskylä
							<br />
							<strong>Sähköposti:</strong> etunimi.sukunimi@jipa.fi
							<br />
							<strong>Puhelinnumerot henkilöittäin:</strong>{" "}
							<Link to="/employees" className="text-white">
								löydät täältä
							</Link>
						</Card.Text>
					</Card.Body>
				</Card>

				<Card className="p-4 shadow-sm border-0 contact-card">
					<Card.Body className="text-center">
						<Card.Title className="text-white">Laskutus</Card.Title>
						<Card.Text className="text-white">
							<strong>Verkkolaskutusosoite:</strong> 003734999895
							<br />
							<strong>Välittäjän nimi:</strong> Apix Messaging Oy
							<br />
							<strong>Operaattoritunnus:</strong> 003723327487
							<br />
							<strong>Maksuehto:</strong> 30 pv tai sovittava erikseen
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

import { Container, Card, Col, Row } from "react-bootstrap";
import Services from "./services";
import banner from "../../assets/kaupunkikuva.png";

//const homepageBanner = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Jyv%C3%A4skyl%C3%A4_-_Ainola.jpg"

export default function HomePage() {
	return (
		<>
			<div>
				<Container>
					<Col>
						<h1 className="mb-4 purple-font text-center">Jyväskylän Insinööripalvelu Oy</h1>
					</Col>
					<Row className="homepage-banner-container section-white">
						<div
							className="homepage-banner"
							style={{
								backgroundImage: `url(${banner})`,
							}}
						/>
					</Row>
					<Row>
						<Col>
							<Card>
								<Card.Body>
									<Card.Text className="card-text-large">
										Jipa eli Jyväskylän Insinööripalvelu Oy on vuonna 2025 perustettu
										ketterä insinööritoimisto. Jipa keskittyy uudis- sekä korjauskohteiden
										rakennus- ja rakennesuunnitteluun sekä valvontaan ja rakennuttamiseen.
									</Card.Text>

									<Card.Text className="card-text-large">
										Tavoitteena on tarjota asiakkaille kokonaispalvelua rakentamisen
										konsultoinnin osalta ja keventää tilaajapuolen työtä hankkeissa.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>

			<Services />
		</>
	);
}

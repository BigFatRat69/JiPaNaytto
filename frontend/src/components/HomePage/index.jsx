import { Container, Card, Col, Row } from "react-bootstrap";
import Services from "./services";
import banner from "../../assets/kaupunkikuva.png";

export default function HomePage() {
	return (
		<>
			<div>
				<Container>
					<Row className="homepage-banner-container section-light">
						<img className="homepage-banner" src={banner} />
					</Row>
					<Row>
						<Col>
							<h1 className="mb-4 purple-font">Jyväskylän Insinööripalvelu Oy</h1>
						</Col>
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

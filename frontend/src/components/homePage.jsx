import { Container, Card, Row, Col } from "react-bootstrap";

export default function HomePage() {
	return (
		<>
			<div className="section-light">
				<Container>
					<Card className="p-5 shadow-sm border-0">
						<Card.Body className="text-center">
							<Card.Title as="h1" className="mb-4 purple-font">
								Jyväskylän Insinööripalvelu Oy
							</Card.Title>

							<Card.Text>
								Jipa eli Jyväskylän Insinööripalvelu Oy on vuonna 2025 perustettu
								ketterä insinööritoimisto. Jipa keskittyy uudis- sekä korjauskohteiden
								rakennus- ja rakennesuunnitteluun sekä valvontaan ja rakennuttamiseen.
							</Card.Text>

							<Card.Text>
								Tavoitteena on tarjota asiakkaille kokonaispalvelua rakentamisen
								konsultoinnin osalta ja keventää tilaajapuolen työtä hankkeissa.
							</Card.Text>
						</Card.Body>
					</Card>
				</Container>
			</div>

			<div className="section-white">
				<Container>
					<h2 className="mb-4 text-center purple-font">Palvelutarjonta</h2>

					<Row>
						<Col md={6} className="mb-4">
							<Card className="service-card h-100 shadow-sm">
								<Card.Body>
									<Card.Title className="purple-font">
										Rakennuttaminen ja asiantuntijapalvelut
									</Card.Title>
									<ul>
										<li>Uudis- ja korjausrakennuttaminen</li>
										<li>Projektinjohto</li>
										<li>Työmaavalvonta</li>
										<li>Kosteudenhallinta</li>
										<li>Turvallisuuskoordinaattori</li>
										<li>Takuuajan tarkastukset</li>
										<li>Rakennustyön tarkkailija</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>

						<Col md={6} className="mb-4">
							<Card className="service-card h-100 shadow-sm">
								<Card.Body>
									<Card.Title className="purple-font">Suunnittelu</Card.Title>
									<ul>
										<li>Rakennesuunnittelu</li>
										<li>Konepajasuunnittelu</li>
										<li>Elementtisuunnittelu</li>
										<li>Kolmannen osapuolen tarkastus</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

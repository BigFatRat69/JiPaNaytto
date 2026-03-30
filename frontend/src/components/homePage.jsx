import { Container, Card, Row, Col } from "react-bootstrap";
export default function HomePage() {
	return (
		<Container className="mt-4">
			<Card className="p-4 shadow">
				<Card.Body>
					<Card.Title as="h1" className="mb-3">
						Jyväskylän Insinööripalvelu Oy
					</Card.Title>

					<Card.Text>
						Jipa eli Jyväskylän Insinööripalvelu Oy on vuonna 2025 
						perustettu uusi ketterä insinööritoimisto. Jipa keskittyy 
						yrityksen alkutaipaleella tarjoamaan asiakkailleen uudis- 
						sekä korjauskohteiden rakennus- ja rakennesuunnittelua, 
						sekä valvontaa ja rakennuttamista.
					</Card.Text>

					<Card.Text>
						Tavoite on saada asiakkaille kokonaispalvelua rakentamisen 
						konsultoinnin osalta ja täten keventää tilaajapuolen työtä 
						hankkeissa.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card className="p-4 shadow">
				<Card.Body>
					<Card.Title as="h1" className="mb-4">
						Palvelutarjonta
					</Card.Title>

					<Row>
						<Col md={6}>
							<Card className="p-3 h-100">
								<Card.Body>
									<Card.Title>Rakennuttaminen ja asiantuntijapalvelut</Card.Title>
									<Card.Text>
										Uudis- ja korjausrakennuttaminen, 
										Projektinjohto, Työmaavalvonta, 
										Kosteudenhallinta- ja turvallisuuskoordinaattorin 
										tehtävät, Takuuajan tarkastukset, Rakennustyön 
										tarkkailijan tehtävät
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col md={6}>
							<Card className="p-3 h-100">
								<Card.Body>
									<Card.Title>Suunnittelu</Card.Title>
									<Card.Text>
										Rakennesuunnittelu, Konepajasuunnittelu, 
										Elementtisuunnittelu, Rakennesuunnitelmien 
										kolmannen osapuolten tarkastus
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>

				</Card.Body>
			</Card>
		</Container>
	);
}
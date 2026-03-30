import { Container, Card } from "react-bootstrap";

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
					<Card.Title as="h1" className="mb-3">
						Jyväskylän Insinööripalvelu Oy
					</Card.Title>

					<Card.Text>

					</Card.Text>

					<Card.Text>

					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}
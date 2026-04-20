import { Container, Card } from "react-bootstrap";
import Services from "./services";

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
				</Container>
			</div>

			<Services />
		</>
	);
}

import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function Project({ pro }) {
	return (
		<Container>
			<Row md={6}>
				<img src={pro.imageUrl} style={{ width: 250 }} />
			</Row>
			<Row md={1}>
				<Carousel.Caption color="gray">
					<Col>
						<h3>{pro.name}</h3>
					</Col>
					<Col>
						<p>{pro.description}</p>
					</Col>
				</Carousel.Caption>
			</Row>
		</Container>
	);
}

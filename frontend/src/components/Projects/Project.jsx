import { Container, Card } from "react-bootstrap";

export default function Project({ pro }) {
	return (
		<Container className="my-3 d-flex justify-content-center">
			<Card style={{ width: "100rem" }}>
				<Card.Img
					variant="top"
					src={pro.imageUrl}
					style={{
						width: "20rem",
						objectFit: "contain",
						padding: "0.5rem",
					}}
				/>

				<Card.Body>
					<Card.Title className="fw-bold">{pro.name}</Card.Title>

					<Card.Text
						className="text-muted"
						style={{
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{pro.description}
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}

import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";

export default function Project({ pro }) {
	const [show, setShow] = useState(false);

	return (
		<>
			<Container className="my-3 d-flex justify-content-center">
				<Card
					style={{ width: "20rem", cursor: "pointer" }}
					onClick={() => setShow(true)}
				>
					<Card.Img
						variant="top"
						src={pro.imageUrl}
						style={{
							height: "200px",
							objectFit: "contain",
							padding: "0.5rem",
						}}
					/>

					<Card.Body>
						<Card.Title className="fw-bold">
							{pro.name}
						</Card.Title>

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

			<Modal show={show} onClick={() => setShow(false)} centered animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>{pro.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<img
						src={pro.imageUrl}
						alt={pro.name}
						style={{
							width: "100%",
							marginBottom: "1rem",
							objectFit: "contain",
						}}
					/>

					<p>{pro.description}</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
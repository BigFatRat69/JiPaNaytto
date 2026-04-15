import { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

export default function Project({ pro }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card className="h-100 shadow-sm border-0 project-card" onClick={handleShow}>
				<Card.Img
					variant="top"
					src={pro.imageUrl}
					alt={pro.name}
					loading="lazy"
					className="project-card-image"
				/>

				<Card.Body className="d-flex flex-column">
					<Card.Title className="fw-bold project-card-title purple-font">
						{pro.name}
					</Card.Title>

					<Card.Text className="text-secondary project-card-description flex-grow-1">
						{pro.description}
					</Card.Text>

					<div className="mt-3 project-card-action purple-font">Lisätietoja</div>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose} centered animation={false} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>{pro.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body className="project-modal-body">
					<img src={pro.imageUrl} alt={pro.name} className="project-modal-image" />

					<p>{pro.description}</p>
				</Modal.Body>

				<Modal.Footer className="project-modal-footer">
					<Button variant="secondary" onClick={handleClose}>
						Sulje
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

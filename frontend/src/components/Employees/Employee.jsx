import { useState } from "react";
import { Card, Modal, Button, ListGroup } from "react-bootstrap";


export default function Employee({ emp }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Card style={{ width: "20rem" }} onClick={handleShow}>
				<Card.Img className="employee-card-image"
					variant="top"
					src={emp.imageUrl}
				/>
				<Card.Body>
					<Card.Title variant="" className="card-text-large">{emp.name}</Card.Title>					
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item className="card-text-small">{emp.role}</ListGroup.Item>
					<ListGroup.Item className="card-text-small">
						{emp.contacts[0].phone}
					</ListGroup.Item>
					<ListGroup.Item className="card-text-small">
						{emp.contacts[0].email}
					</ListGroup.Item>
				</ListGroup>
					<Card.Text className="card-text-small employee-description">{emp.description}</Card.Text>
					<div className="mt-3 employee-card-action purple-font">Lisätietoja</div>
			</Card>

			<Modal show={show} onHide={handleClose} centered animation={false} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>{emp.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body className="employee-modal-body">
					<img src={emp.imageUrl} alt={emp.name} className="employee-modal-image" />

					<p>{emp.description}</p>
				</Modal.Body>

				<Modal.Footer className="employee-modal-footer">
					<Button variant="secondary" onClick={handleClose}>
						Sulje
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

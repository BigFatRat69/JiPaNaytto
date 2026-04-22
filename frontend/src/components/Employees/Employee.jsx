import { useState } from "react";
import { Card, Modal, Button, ListGroup } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export default function Employee({ emp }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card
				style={{ width: "20rem", cursor: "pointer" }}
				className="service-card employee-card h-100 shadow-sm"
				onClick={handleShow}
			>
				<Card.Img
					className="employee-card-image"
					variant="top"
					src={emp.imageUrl}
					alt={emp.name}
				/>
				<Card.Body className="d-flex flex-column">
					<Card.Title className="card-text-large text-center mb-2">{emp.name}</Card.Title>
					<Card.Subtitle className="card-text-small text-muted text-center mb-3">{emp.role}</Card.Subtitle>

					<ListGroup className="list-group-flush flex-grow-1">
						<ListGroup.Item className="card-text-small d-flex align-items-center">
							<FaPhone className="me-2 text-primary" />
							{emp.contacts[0].phone}
						</ListGroup.Item>
						<ListGroup.Item className="card-text-small d-flex align-items-center">
							<FaEnvelope className="me-2 text-primary" />
							{emp.contacts[0].email}
						</ListGroup.Item>
					</ListGroup>

					<Card.Text className="card-text-small employee-description mt-3 flex-grow-1">
						{emp.description}
					</Card.Text>

					<div className="text-center mt-3">
						<Button variant="outline-primary" className="employee-card-action purple-font border-0">
							<FaInfoCircle className="me-2" />
							Lisätietoja
						</Button>
					</div>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose} centered size="lg" className="employee-modal">
				<Modal.Header closeButton className="border-0 bg-gradient">
					<Modal.Title className="d-flex align-items-center w-100">
						<div className="d-flex align-items-center">
							<img
								src={emp.imageUrl}
								alt={emp.name}
								className="rounded-circle me-3 modal-profile-img"
							/>
							<div>
								<h4 className="mb-1 text-dark">{emp.name}</h4>
								<p className="mb-0 text-muted fw-medium">{emp.role}</p>
							</div>
						</div>
					</Modal.Title>
				</Modal.Header>

				<Modal.Body className="employee-modal-body p-0">
					<div className="row g-0">
						<div className="col-lg-5">
							<div className="modal-image-container">
								<img
									src={emp.imageUrl}
									alt={emp.name}
									className="employee-modal-image w-100"
								/>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="modal-content-section p-4">
								<div className="mb-4">
									<h5 className="section-title mb-3">
										<FaInfoCircle className="me-2 text-primary" />
										Kuvaus
									</h5>
									<p className="description-text">{emp.description}</p>
								</div>

								<div className="contact-section">
									<h5 className="section-title mb-3">
										<FaPhone className="me-2 text-primary" />
										Yhteystiedot
									</h5>
									<div className="contact-item mb-3 p-3 rounded bg-light">
										<div className="d-flex align-items-center">
											<FaPhone className="me-3 text-primary fs-5" />
											<div>
												<small className="text-muted d-block">Puhelin</small>
												<span className="fw-medium">{emp.contacts[0].phone}</span>
											</div>
										</div>
									</div>
									<div className="contact-item p-3 rounded bg-light">
										<div className="d-flex align-items-center">
											<FaEnvelope className="me-3 text-primary fs-5" />
											<div>
												<small className="text-muted d-block">Sähköposti</small>
												<a
													className="text-decoration-none fw-medium text-dark"
												>
													{emp.contacts[0].email}
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer className="border-0 bg-light">
					<Button
						variant="outline-secondary"
						onClick={handleClose}
						className="px-4 py-2"
					>
						Sulje
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

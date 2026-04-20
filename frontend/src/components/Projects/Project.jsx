import { Card } from "react-bootstrap";

export default function Project({ pro }) {

	return (
		<>
			<Card className="h-100 shadow-sm border-0 project-card">
				<div className="project-card-image-wrapper">
					<span className="project-card-badge">rakenne- ja elementtisuunnittelu</span>
					<Card.Img
						variant="top"
						src={pro.imageUrl}
						alt={pro.name}
						loading="lazy"
						className="project-card-image"
					/>
				</div>

				<Card.Body className="d-flex flex-column">
					<Card.Title className="fw-bold project-card-title purple-font">
						{pro.name}
					</Card.Title>

					<Card.Text className="text-secondary project-card-description flex-grow-1">
						{pro.description}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

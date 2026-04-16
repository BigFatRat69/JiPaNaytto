import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Employee({ emp }) {
	return (
		<>
			<Card style={{ width: "20rem" }}>
				<Card.Img className="employee-card-image"
					variant="top"
					src={emp.imageUrl}
				/>
				<Card.Body>
					<Card.Title variant="" style={{fontSize:"25px"}}>{emp.name}</Card.Title>					
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
					<Card.Text className="card-text-large">{emp.description}</Card.Text>
			</Card>
		</>
	);
}

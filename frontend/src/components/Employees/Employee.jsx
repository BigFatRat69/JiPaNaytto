import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Employee({ emp }) {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src={emp.imageUrl}
					style={{
						width: "18rem",
						height: "13rem",
						objectFit: "contain",
						paddingLeft: 1,
						paddingRight: 3,
						paddingTop: 1,
						paddingBottom: 1,
					}}
				/>
				<Card.Body>
					<Card.Title variant="">{emp.name}</Card.Title>
					<Card.Text>{emp.description}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item variant="secondary">{emp.role}</ListGroup.Item>
					<ListGroup.Item variant="secondary">
						{emp.contacts[0].phone}
					</ListGroup.Item>
					<ListGroup.Item variant="secondary">
						{emp.contacts[0].email}
					</ListGroup.Item>
				</ListGroup>
			</Card>
		</>
	);
}

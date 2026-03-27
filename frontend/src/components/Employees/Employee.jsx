import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Employee({ emp }) {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={emp.imageUrl} width="150" />
				<Card.Body>
					<Card.Title>{emp.name}</Card.Title>
					<Card.Text>{emp.description}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>{emp.role}</ListGroup.Item>
					<ListGroup.Item>{emp.contacts[0].phone}</ListGroup.Item>
					<ListGroup.Item>{emp.contacts[0].email}</ListGroup.Item>
				</ListGroup>
			</Card>

			{/* <img src={emp.imageUrl} width="150" />
			<h3>{emp.name}</h3>
			<h2>{emp.role}</h2>
			<div>{emp.contacts[0].email}</div>
			<div>{emp.contacts[0].phone}</div>
			<div>{emp.description}</div> */}
		</>
	);
}

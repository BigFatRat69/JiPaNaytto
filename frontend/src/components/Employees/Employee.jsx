import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Employee({ emp }) {
	return (
		<>
			<Card style={{ width: "20rem" }}>
				<Card.Img
					variant="top"
					src={emp.imageUrl}
					style={{
						width: "20rem",
						height: "13rem",
						objectFit: "contain",
						paddingLeft: 1,
						paddingRight: 3,
						paddingTop: 1,
						paddingBottom: 1,
					}}
				/>
				<Card.Body>
					<Card.Title variant="" style={{fontSize:"25px"}}>{emp.name}</Card.Title>					
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item style={{ fontSize: 15 }}>{emp.role}</ListGroup.Item>
					<ListGroup.Item style={{ fontSize: 15 }}>
						{emp.contacts[0].phone}
					</ListGroup.Item>
					<ListGroup.Item style={{ fontSize: 15 }}>
						{emp.contacts[0].email}
					</ListGroup.Item>
				</ListGroup>
					<Card.Text style={{fontSize:"20px"}}>{emp.description}</Card.Text>
			</Card>
		</>
	);
}

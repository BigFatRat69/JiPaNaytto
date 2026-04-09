import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Employee from "./Employee";
import { Container, Col, Row } from "react-bootstrap";

export default function Employees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const query = `*[_type == "employee"]{
      _id,
      name,
      description,
      "imageUrl": photo.asset->url,
	  role,
	  contacts,
    }`;

		client.fetch(query).then((data) => {
			setEmployees(data);
		});
	}, []);

	return (
		<Container>
			<Row>
				{employees.map((emp: any) => (
					<Col key={emp._id} xs={12} md={6} lg={4} className="mb-4 p-2">
						<Employee emp={emp} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

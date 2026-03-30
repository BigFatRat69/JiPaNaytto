import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Employee from "./Employee";
import { ListGroup } from "react-bootstrap";

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
		<ListGroup horizontal>
			{employees.map((emp: any) => (
				<ListGroup.Item key={emp._id}>
					<Employee emp={emp} />
				</ListGroup.Item>
			))}
		</ListGroup>
	);
}

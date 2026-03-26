import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Employee from "./Employee";

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
		<div>
			{employees.map((emp: any) => (
				<div key={emp._id}>
					<Employee emp={emp} />
				</div>
			))}
		</div>
	);
}

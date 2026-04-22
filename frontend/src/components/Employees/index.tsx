import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Employee from "./Employee";
import { Container, Col, Row } from "react-bootstrap";

export default function Employees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const query = `*[_type == "employee"] | order(_createdAt asc){
	  _createdAt,
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
		<>
			<Container className="employees-title-container">
				<Row>
					<h1 className="purple-font">Asiantuntijamme Jipalla</h1>
					<h5>
						Jipan henkilöstöllä on erittäin laaja kokemus suunnittelu ja
						rakennuttamishankkeista. Rakennesuunnittelun osalta henkilöstö on tehnyt
						kohteita ympäri Suomen ja myös ulkomaille. Suunnittelukokemusta on mm.
						tornitaloista, kerrostaloista, suurista halleista, kouluista,
						päiväkodeista, parkkitaloista, parkkihalleista, liikerakennuksista,
						kattilalaitoksista. Jipa:lla on varmasti asiakkaan tarpeisiin sopiva
						suunnittelija kehittämään yhteistä taivalta.
					</h5>
				</Row>
			</Container>
			<Container>
				<Row>
					{employees.map((emp: any) => (
						<Col key={emp._id} xs={12} md={6} lg={4} className="mb-4 p-2">
							<Employee emp={emp} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}

import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Project from "./Project";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const query = `*[_type == "project"]{
      _id,
      name,
      description,
      "imageUrl": photo.asset->url
    }`;

		client.fetch(query).then((data) => {
			setProjects(data);
		});
	}, []);

	return (
		<Container>
			<Row>
				{projects.map((pro: any) => (
					<Col key={pro._id} xs={12} sm={6} md={4} lg={3}>
						<Project pro={pro} />
					</Col>
				))}
			</Row>
		</Container>
	);
}
import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Project from "./Project";
import { Container, ListGroup } from "react-bootstrap";

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
			<ListGroup>
				{projects.map((pro: any) => (
					<ListGroup.Item key={pro.id_} className="border-0">
						<Project pro={pro} />
					</ListGroup.Item>
				))}
			</ListGroup>
		</Container>
	);
}

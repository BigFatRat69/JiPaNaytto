import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Project from "./Project";
import { Carousel } from "react-bootstrap";

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
		<Carousel data-bs-theme="dark">
			{projects.map((pro: any) => (
				<Carousel.Item key={pro._id} interval={10000}>
					<Project pro={pro} />
				</Carousel.Item>
			))}
		</Carousel>
	);
}

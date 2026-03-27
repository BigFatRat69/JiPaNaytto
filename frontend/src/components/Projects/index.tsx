import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Project from "./Project";

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
		<div>
			{projects.map((pro: any) => (
				<div key={pro._id}>
					<Project pro={pro} />
				</div>
			))}
		</div>
	);
}

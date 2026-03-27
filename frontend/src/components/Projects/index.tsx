import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Project from "./Project";

export default function Projects() {
	const [references, setReferences] = useState([]);

	useEffect(() => {
		const query = `*[_type == "reference"]{
      _id,
      name,
      description,
      "imageUrl": photo.asset->url
    }`;

		client.fetch(query).then((data) => {
			setReferences(data);
		});
	}, []);

	return (
		<div>
			{references.map((ref: any) => (
				<div key={ref._id}>
					<Project ref={ref} />
				</div>
			))}
		</div>
	);
}

import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import Project from "./Project";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const query = `*[_type == "project"]{
			_id,
			name,
			description,
			category,
			"imageUrl": photo.asset->url
		}`;

		client
			.fetch(query)
			.then((data) => {
				setProjects(data);
			})
			.catch((err) => {
				console.error(err);
				setError("Failed to load projects.");
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<Container>
			<Row>
				{projects.map((pro: any) => (
					<Col key={pro._id} xs={12} md={4} lg={4} className="mb-4 p-2">
						<Project pro={pro} />
					</Col>
				))}
			</Row>
		</Container>
	);
}
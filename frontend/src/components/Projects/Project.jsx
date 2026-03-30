import { Carousel } from "react-bootstrap";

export default function Project({ pro }) {
	return (
		<>
			<img src={pro.imageUrl} width="150" />
			<Carousel.Caption color="gray">
				<h3>{pro.name}</h3>
				<p>{pro.description}</p>
			</Carousel.Caption>
		</>
	);
}

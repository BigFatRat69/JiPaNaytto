export default function Project({ pro }) {
	return (
		<>
			<img src={pro.imageUrl} width="150" />
			<h3>{pro.name}</h3>
			<p>{pro.description}</p>
		</>
	);
}

export default function Project({ ref }) {
	return (
		<>
			<img src={ref.imageUrl} width="150" />
			<h3>{ref.name}</h3>
			<p>{ref.description}</p>
		</>
	);
}

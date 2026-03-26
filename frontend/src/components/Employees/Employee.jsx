export default function Employee({ emp }) {
	return (
		<>
			<img src={emp.imageUrl} width="150" />
			<h3>{emp.name}</h3>
			<div>{emp.description}</div>
		</>
	);
}

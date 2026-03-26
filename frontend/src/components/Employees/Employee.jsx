export default function Employee({ emp }) {
	return (
		<>
			<img src={emp.imageUrl} width="150" />
			<h3>{emp.name}</h3>
			<h2>{emp.role}</h2>
			<h2>{emp.contacts}</h2>
			<div>{emp.description}</div>
		</>
	);
}

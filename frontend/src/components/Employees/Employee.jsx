export default function Employee({ emp }) {
	return (
		<>
			<img src={emp.imageUrl} width="150" />
			<h3>{emp.name}</h3>
			<h2>{emp.role}</h2>
			<div>{emp.contacts[0].email}</div>
			<div>{emp.contacts[0].phone}</div>
			<div>{emp.description}</div>
		</>
	);
}

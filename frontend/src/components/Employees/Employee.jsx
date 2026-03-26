export default function Employee({ emp }) {
	return (
		<>
			<img src={emp.imageUrl} width="150" />
			<h3>{emp.name}</h3>
			<h2>{emp.role}</h2>

			{emp.contacts.map((contact, index) => (
				<div key={index}>
					<div>{contact.email}</div>
					<div>{contact.phone}</div>
				</div>
			))}

			<div>{emp.description}</div>
		</>
	);
}
const Employee = ({ employee }) => {
	return (
		<>
			<h2>{employee.name}</h2>
			<p>{employee.position}</p>
			<p>{employee.contacts}</p>
		</>
	);
};

export default Employee;

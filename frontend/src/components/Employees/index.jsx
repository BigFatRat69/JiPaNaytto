import Employee from "./Employee";

const Employees = () => {
	const dummyList = [
		{
			id: 0,
			name: "Työntekijä 1",
			position: "Testaaja",
			contacts: "XXX.XXX@gmail.com",
		},
		{
			id: 1,
			name: "Työntekijä 2",
			position: "Testaaja",
			contacts: "XXX.XXX@gmail.com",
		},
	];

	return (
		<div>
			<h1>Työntekijät</h1>
			{dummyList.map((dummy) => (
				<li key={dummy.id}>
					<Employee employee={dummy} />
				</li>
			))}
		</div>
	);
};

export default Employees;

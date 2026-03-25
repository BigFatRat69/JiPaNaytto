import { useEffect, useState } from "react";
import { client } from "../sanity/client";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const query = `*[_type == "employee"]{
      _id,
      name,
      description,
      "imageUrl": photo.asset->url
    }`;

    client.fetch(query).then((data) => {
      setEmployees(data);
    });
  }, []);

  return (
    <div>
      {employees.map((emp: any) => (
        <div key={emp._id}>
          <img src={emp.imageUrl} width="150" />
          <h3>{emp.name}</h3>
          <div>{emp.description}</div>
        </div>
      ))}
    </div>
  );
}
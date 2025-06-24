import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_CUSTOMERS = gql`
  query Customers {
    customers {
      id
      name
      address
      contact
    }
  }
`;

const CustomersData = () => {
  const { loading, data, error } = useQuery(GET_CUSTOMERS);
  console.log("Customers", data);
  const navigate = useNavigate();

  const handleEdit = (...customer) => {
    navigate("/edit", { state: customer[0].id });
  };

  return (
    <div>
      <h2>Customers Data</h2>
      {loading && <h1>Loading .....</h1>}
      {error && <h4>Error while fetching Data</h4>}
      {/* <pre>{JSON.stringify(data?.customers, 2, null)}</pre> */}
      <ul>
        {data?.customers.map(({ id, name, address, contact }) => {
          return (
            <li key={id}>
              <h3>Name: {name}</h3>
              <h3>Address: {address}</h3>
              <h3>Contact: {contact}</h3>
              <div>
                <button
                  onClick={() => handleEdit({ id, name, address, contact })}
                >
                  Edit
                </button>
                <button style={{ marginLeft: "20px" }}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomersData;

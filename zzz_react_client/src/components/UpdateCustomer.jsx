import React from "react";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_CUSTOMER = gql`
  query Customer($id: ID!) {
    customer(id: $id) {
      id
      name
      address
      contact
    }
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer(
    $id: ID!
    $name: String!
    $address: String!
    $contact: String!
  ) {
    updateCustomer(id: $id, name: $name, address: $address, contact: $contact) {
      id
      name
      address
      contact
    }
  }
`;

const UpdateCustomer = () => {
  const value = useLocation();
  console.log("Value", value.state);
  const userId = value?.state;
  const { loading, error, data } = useQuery(GET_CUSTOMER, {
    variables: { id: userId },
    skip: !userId,
  });
  const [updateCustomer, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_CUSTOMER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log("cust", data?.customer);
  if (updateLoading) return <p>update loading...</p>;
  if (updateError) return <p>update Error :</p>;
  return (
    <div>
      <h1>Edit the Customer Data</h1>
      <Formik
        initialValues={data.customer}
        enableReinitialize
        onSubmit={async (values, x) => {
          const { id, name, address, contact } = values;
          try {
            await updateCustomer({ variables: { id, name, address, contact } });
            console.log("updated successfully");
          } catch (error) {
            console.log("error", error);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Enter Name"
            />
            {errors.name && touched.name && errors.name}
            <br />
            <input
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              placeholder="Enter Address"
            />
            {errors.address && touched.address && errors.address}
            <br />
            <input
              type="text"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
              placeholder="Enter contact"
            />
            {errors.contact && touched.contact && errors.contact} <br />
            <button type="submit" disabled={isSubmitting}>
              Update
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateCustomer;

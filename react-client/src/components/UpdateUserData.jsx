import { useQuery, gql, useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { Formik } from "formik";
const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      firstname
      lastname
      address
      contact
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $firstname: String
    $lastname: String
    $address: String
    $contact: Int
  ) {
    updateUser(
      id: $id
      firstname: $firstname
      lastname: $lastname
      address: $address
      contact: $contact
    ) {
      id
      firstname
      lastname
      address
      contact
    }
  }
`;

const UpdateUserData = () => {
  const value = useLocation();

  console.log("Query value", value.state);
  const userId = value?.state;

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { id: userId },
    skip: !userId,
  });

  console.log("res", data);
  const [updateUser, { loading: updating, error: updateError }] =
    useMutation(UPDATE_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const { id, firstname, lastname, address, contact } = data.user;
  console.log("firstname", firstname);

  return (
    <div>
      {/* {data.users.map((user) => (
        <div key={user.id}>
          <h3>
            first Name: {user.firstname} {user.id}
          </h3>
          <h3>last Name: {user.lastname}</h3>
          <h3>Address: {user.address}</h3>
          <h3>Contact: {user.contact}</h3>
          <br />
        </div>
      ))} */}
      <h3>single user</h3>
      <h3>first Name: {firstname}</h3>
      <h3>last Name: {lastname}</h3>
      <h3>Address: {address}</h3>
      <h3>Contact: {contact}</h3>
      <p>Edit user for update:</p>
      <Formik
        initialValues={data.user}
        enableReinitialize //
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { firstname, lastname, address, contact } = values;
            await updateUser({
              variables: {
                id: userId,
                firstname,
                lastname,
                address,
                contact: Number(contact),
              },
            });
            console.log("User updated successfully!");
          } catch (error) {
            console.error("Update failed:", error); // ✅ This will show the real ApolloError
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,

          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
              placeholder="Enter FirstName"
            />
            <br />

            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
              placeholder="Enter lastname"
            />
            <br />

            <input
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              placeholder="Enter Address"
            />
            <br />
            <input
              type="text"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
              placeholder="Enter Contact"
            />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Update
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateUserData;

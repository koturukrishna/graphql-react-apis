import { gql, useMutation } from "@apollo/client";
import { Formik } from "formik";

const CRETE_USER = gql`
  mutation CreateUser(
    $firstname: String!
    $lastname: String!
    $address: String!
    $contact: Int!
  ) {
    createUser(
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

const CreateUser = () => {
  const [createUser, { loading: creating, error: creatingError }] =
    useMutation(CRETE_USER);

  return (
    <div>
      <p>create new user:</p>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          address: "",
          contact: "",
        }}
        enableReinitialize //
        onSubmit={async (values, setSubmitting) => {
          console.log(values);

          try {
            const { firstname, lastname, address, contact } = values;
            await createUser({
              variables: {
                firstname,
                lastname,
                address,
                contact: Number(contact),
              },
            });
            console.log("setSubmitting", setSubmitting);
            setSubmitting.resetForm();
            console.log("User created successfully!");
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
              Create
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUser;

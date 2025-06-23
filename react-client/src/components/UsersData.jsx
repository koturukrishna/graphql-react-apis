import { useQuery, gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const USERS_QUERY = gql`
  query Users {
    users {
      id
      firstname
      lastname
      address
      contact
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      firstname
    }
  }
`;

const UsersData = () => {
  const navigate = useNavigate();
  const [deleteUser, { loading: createLoading, error: createError }] =
    useMutation(DELETE_USER);
  const {
    loading: queyLoading,
    error: queryError,
    data,
  } = useQuery(USERS_QUERY);

  if (queyLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error :</p>;

  const handleEdit = (id) => {
    navigate("/edit", { state: id });
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser({
        variables: { id: userId },
        refetchQueries: ["Users"],
      });
      console.log("User deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  };

  return (
    <div>
      {data.users.map((user) => (
        <div key={user.id}>
          <h3>
            first Name: {user.firstname} {user.id}
          </h3>
          <h3>last Name: {user.lastname}</h3>
          <h3>Address: {user.address}</h3>
          <h3>Contact: {user.contact}</h3>
          <button onClick={() => handleEdit(user.id)}>Edit</button>

          <button
            style={{ marginLeft: "25px" }}
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default UsersData;

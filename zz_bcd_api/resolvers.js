// const User = require("./models/User");

// const resolvers = {
//   Query: {
//     users: async () => {
//       try {
//         const users = await User.find();
//         return users;
//       } catch (error) {
//         throw new Error("error fetching the data from db");
//       }
//     },

//     user: async (parent, { id }) => {
//       try {
//         const user = await User.findById(id);
//         return user;
//       } catch (error) {
//         throw new Error("error fetching the data from db id", id);
//       }
//     },
//   },
//   Mutation: {
//     createUser: async (parent, { firstname, lastname, address, contact }) => {
//       try {
//         const user = new User({ firstname, lastname, address, contact });
//         const res = await user.save();
//         return res;
//       } catch (error) {
//         throw new Error("Error creating a new user in the database");
//       }
//     },
//     updateUser: async (
//       parent,
//       { id, firstname, lastname, address, contact }
//     ) => {
//       try {
//         const user = await User.findByIdAndUpdate(
//           id,
//           { firstname, lastname, address, contact },
//           { new: true }
//         );
//         return user;
//       } catch (error) {
//         throw new Error("Error updating a  user in the database", id);
//       }
//     },
//     deleteUser: async (parent, { id }) => {
//       try {
//         const user = await User.findByIdAndDelete(id);
//         return user;
//       } catch (error) {
//         throw new Error("Error deleting a  user in the database", id);
//       }
//     },
//   },
// };

// module.exports = resolvers;

const User = require("./models/User");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users from the database.");
      }
    },

    user: async (parent, { id }) => {
      try {
        const user = await User.findById(id);
        if (!user) {
          throw new Error("User not found with given ID.");
        }
        return user;
      } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw new Error("Failed to fetch user.");
      }
    },
  },

  Mutation: {
    createUser: async (parent, { firstname, lastname, address, contact }) => {
      try {
        const newUser = new User({ firstname, lastname, address, contact });
        const savedUser = await newUser.save();
        return savedUser;
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user.");
      }
    },

    updateUser: async (
      parent,
      { id, firstname, lastname, address, contact }
    ) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { firstname, lastname, address, contact },
          { new: true }
        );
        if (!updatedUser) {
          throw new Error("User not found to update.");
        }
        return updatedUser;
      } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Failed to update user.");
      }
    },

    deleteUser: async (parent, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
          throw new Error("User not found to delete.");
        }
        return deletedUser;
      } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error("Failed to delete user.");
      }
    },
  },
};

module.exports = resolvers;

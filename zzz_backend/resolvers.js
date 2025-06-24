const Customer = require("./models/customer");

const resolvers = {
  Query: {
    customers: async () => {
      try {
        return await Customer.find();
      } catch (error) {
        throw new Error(`Error in fetching the data in the database`);
      }
    },
    customer: async (parent, { id }) => {
      try {
        return await Customer.findById(id);
      } catch (error) {
        throw new Error(
          `Error in fetching the data with id ${id} in the database`
        );
      }
    },
  },
  Mutation: {
    createCustomer: async (parent, { name, address, contact }) => {
      try {
        const customer = new Customer({ name, address, contact });
        return await customer.save();
      } catch (error) {
        throw new Error(`Error in creating the data with  in the database`);
      }
    },
    updateCustomer: async (parent, { id, name, address, contact }) => {
      try {
        const customer = await Customer.findByIdAndUpdate(
          id,
          { name, address, contact },
          { new: true }
        );
        return customer;
      } catch (error) {
        throw new Error(`Error in creating the data with  in the database`);
      }
    },
    deleteCustomer: async (parent, { id }) => {
      try {
        return await Customer.findByIdAndDelete(id);
      } catch (error) {
        throw new Error(
          `Error in deleting the data with id ${id} in the database`
        );
      }
    },
  },
};

module.exports = resolvers;

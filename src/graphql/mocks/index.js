export default {
  Query: () => ({
    user: () => ({
      id: 'unique-random-id',
      name: 'John Smith',
      email: 'john.smith@acme.com',
    }),
  }),
};

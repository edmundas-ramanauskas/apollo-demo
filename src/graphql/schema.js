export default `
  type Query {
    user: User
  }
  type User {
    id: String
    name: String
    email: String
  }
`;

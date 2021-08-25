const gql = require('graphql-tag');

gql`

type Book {
id: ID!
name: String!
owner: String
countPepper: Int
createdAt: String
updatedAt: String
}`
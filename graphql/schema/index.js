const { gql} = require('apollo-server-express')
const {buildSchema} = require('graphql')

const typeDefs = buildSchema(`

type Booker{
  name: String
}

type Saleperson{
  name: String
}

type Shopkeeper{
  name: String
}

type Supplier{
  _id: ID!
  name: String!
  email: String!
  password: String
}

input TakeSupplier{
  name: String!
  email: String!
  password: String
}

type Auth{
  userId: ID!
  token: String!
  tokenExp: Int!
}

type RootMutation{
  # Supplier
  addSupplier(getData: TakeSupplier): Supplier
  delSupplier(id: ID!): String
  updateSupplier(id: ID!, getData: TakeSupplier): String

  # Authentication
  login(email: String!, password: String!): Auth
}

type RootQuery {
  booker: [Booker!]!
  saleperson: [Saleperson!]!
  shopkeeper: [Shopkeeper!]!
  suppliers: [Supplier!]!
  
}
schema{
  query:RootQuery
  mutation:RootMutation
}


`);

module.exports = typeDefs;
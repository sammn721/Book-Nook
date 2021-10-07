const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: [String]
        description: String!
        bookId: String!
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User!
    }
    type Mutation {
        login: ,
        addUser: ,
        saveBook: ,
        removeBook:
    }
`;
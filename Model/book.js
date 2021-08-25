    
    
    const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLNonNull
    } = require('graphql');

    const bookType = new GraphQLObjectType({
    name: "Book", description: "this is a single book",
    fields: {
    id: { type:GraphQLNonNull (GraphQLID),description: "this is the book id"},
    name: { type:GraphQLNonNull (GraphQLString), description: "name" },
    owner: {type: GraphQLString, description: "owner" },
    countPepper: {  type: GraphQLInt, description: "countPepper"},
    createdAt: { type: GraphQLString, description: "description" },
    updatedAt: { type: GraphQLString, description: "updatedAt" }
    }
    });
    const bookInput = new GraphQLInputObjectType({
    name: 'BookInput',
    description: 'bookInput',
    fields: {
    name: { type: GraphQLString, description: "name" },
    owner: {type: GraphQLString, description: "owner" },
    tags: { type: new GraphQLList(GraphQLString), description: '',  },
    }
    });
    const UserNotFoundError = new GraphQLInputObjectType({
        name: 'Error',
        description: 'error',
        fields: {
        error: { type: GraphQLString, description: "error" },
   
        tags: { type: new GraphQLList(GraphQLString), description: '',  },
        }
        });
        const result = bookType | UserNotFoundError;
    module.exports = {bookType,bookInput,result};

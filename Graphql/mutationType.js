    const { bookType, bookInput } = require("../Model/book");
    const { GraphQLObjectType, GraphQLError ,GraphQLString} = require('graphql');
    const bookModel = require('../Controller/book');
    const { ApolloError ,} = require('apollo-server-errors');

    exports.mutationType = new GraphQLObjectType({
    name: "Mutuation",
    description: "this  Mutuation Book",
    fields: {
    addBooks: {
    type:bookType,
    args: {
    book: { type: bookInput, description: "this is the input type" }
    },
    resolve: async (root, args, context, info) => {
        console.log(args);
    return await bookModel.insertBook(args.book)


    }
    },
    }
    });





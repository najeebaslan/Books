const { bookType } = require("../Model/book");
const { GraphQLObjectType, GraphQLList,GraphQLInt,} = require('graphql');
const  bookModel = require('../Controller/book');

exports.queryType = new GraphQLObjectType({
    name: 'Query',
    description: 'this is the query type',
    fields: {
        book: {
            type: new GraphQLList(bookType),
            description: 'this is the list of words returned',
            args: {
                top: { type: GraphQLInt }
            },
            resolve: (root, args, context, info) => {

                return bookModel.getAllBooks(args.top);
            }
        },
    }
});
const { GraphQLSchema } = require("graphql");
const { queryType } = require("../Graphql/queryType");

const { mutationType } = require("../Graphql/mutationType");

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});

exports.schema = schema;

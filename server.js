'use strict';

const express = require("express");
var cors = require('cors');
const mongoose = require("mongoose");
const { schema } = require('./Graphql/Schema_Graphql');
const { graphqlHTTP } = require('express-graphql');
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const getErrorCode=require('./errors')
  
const  { v4 }= require('uuid');
// const { ApolloServer, ApolloError } =require("apollo-server-express");
const { GraphQLError }= require ("graphql");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + ''));
app.use(morgan('short'));

app.listen(3000, () => {
    console.log(`start listening to http://localhost:${PORT}/graphql`);
});
app.use('/graphql' , graphqlHTTP({
    schema,
    graphiql: true,
    context: { startTime: Date.now() },
    
    customFormatErrorFn: (error) => ({
        message: error.message,
        // locations: error.locations,
        // stack: error.stack ? error.stack.split('\n') : [],
        // path: error.path,
        extensions:error.extensions,
      })
    
}))
mongoose.connect('mongodb://localhost/book', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,

}).then(() => console.log("connected to Database")).
    catch((error) => logger.error("Error no connected to Database" + error));

mongoose.set('useCreateIndex', true)

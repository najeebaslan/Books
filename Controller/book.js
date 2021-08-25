var Book = require("../Model/Mo");
const { ApolloError, } = require('apollo-server-errors');
const { errorType } = require('../errorContant')

module.exports = {

    insertBook: book => {
        let newBook = new Book(book);
        return newBook.save().then((result) => {
            if (result == null) {
                throw new ApolloError("This is My Test Error", { "Error": "najeeeeeeeee" });
            } else return result

        });

    },

    async getAllBooks(top) {

        return await Book.find({}).sort({ createdAt: '-1' }).limit(top).then((result) => {
            if (result[0] == undefined) {
                throw new ApolloError(null,//this is for message error but i do not need this massage
                    errorType.NOTFOUND.statusCode, { "Error": "This is My Test Error byb", });
            } else return result

        });
    },

    getBookById: id => {
        return Book.findById(id);
    },

    updateBook: (id, book) => {
        return Book.findByIdAndUpdate(id, book);
    },

    deleteBook: id => {
        return Book.deleteOne({ _id: id });
    }
};










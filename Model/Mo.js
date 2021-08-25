
const mongoose = require('mongoose');
const BookSchema = mongoose.Schema(
    {
        name: String,
        owner: String,
        countPepper: Number,
    }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });
   
module.exports = mongoose.model("book", BookSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, require: true},
    title: {type: String, require: true},
    poster_path: {type: String, unique: true, dropDups: true},

})

const GoogleBooks = mongoose.model("Movie", bookSchema);

module.exports = GoogleBooks;
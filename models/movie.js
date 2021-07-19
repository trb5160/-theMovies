const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    id: {type: String, require: true},
    title: { type: String, require: true},
    actors: [{ type: String, require: true}],
    description: { type: String, require: true},
    image: { type: String, unique: true, dropDups: true},
    link: { type: String, required: true}
})

const moviedb = mongoose.model("moviedb", movieSchema);

module.exports = moviedb;
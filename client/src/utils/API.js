// Required module
import axios from "axios";

export default {
    // Retrieve Google books
    googleBooks: function(query) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=53f434cb06beb0362949cd14a3dea1a2&query=${query}`)
    },
    
    // Saves book to DB
    saveBook: function(movieData) {
        return axios.post("/api/books", movieData);
    },
    // Gets saved books from DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Gets book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes book with the given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};
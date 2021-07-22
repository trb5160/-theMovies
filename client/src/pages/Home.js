import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Input, SubmitBtn} from "../components/Search/Search";
import API from "../utils/API";
import ResultList from "../components/ResultList/ResultList";

class Home extends Component {

    state = {
        books: [],
        search: ""
    };

    // Search function for movie API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.results)
                this.setState({
                books: res.data.results,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };
    
    
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            poster_path: currentBook.poster_path,
            description: currentBook.overview,
            rating: currentBook.voting_average,
            title: currentBook.title
            
            
        })
        .then(res => console.log("Successfully POSTED to DB!", res))
        .catch(err => console.log("this is the error", err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                <form>
                    <h5>Search for movies</h5>
                    <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="e.g. Spiderman"
                    />
                    <SubmitBtn onClick={this.handleFormSubmit}/>
                </form>
                
                {this.state.books.length ? (
                    <ResultList 
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </ResultList>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>Nothing to display yet...</p>
                    </div>
                )}
                
                </Container>
            </div>
        )
    }
}

export default Home
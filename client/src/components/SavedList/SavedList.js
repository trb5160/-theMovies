import React, { Component } from 'react';
import SavedListItem from "../SavedListItem/SavedListItem";

class ResultList extends Component {


    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <SavedListItem 
            key={book.id}
            id={book.id}
            title={book.title}
            poster_path={book.poster_path}
            description={book.overview}
            rating={book.vote_average}
            deleteGoogleBook={this.props.deleteGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultList
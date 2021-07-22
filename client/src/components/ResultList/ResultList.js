import React, { Component } from 'react'
import ResultListItem from "../ResultListItem/ResultListItem";

class ResultList extends Component {

    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <ResultListItem 
            key={book.id}
            id={book.id}
            title={book.title}
            poster_path={book.poster_path}
            description={book.overview}
            rating={book.vote_average}
            saveGoogleBook={this.props.saveGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultList
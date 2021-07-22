import React from 'react';

function ResultListItem(props) {
    const {title, poster_path, description,  deleteGoogleBook} = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                <img src={'https://image.tmdb.org/t/p/original/' + poster_path} style={{maxWidth: "100px"}} alt="movie"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{title}</h5>
                        <p className="card-text" >{description}</p>
                        
                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ResultListItem;
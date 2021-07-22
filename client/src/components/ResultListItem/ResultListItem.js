import React, { Component } from 'react';

class ResultListItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }

    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }
    }

    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }


    render () {
        
       

        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={'https://image.tmdb.org/t/p/original/' + this.props.poster_path} style={{maxWidth: "100px"}} alt="book"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p className="card-text" >Rating: {this.props.rating}</p>
                        <button onClick={this.onClickFunc} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ResultListItem;
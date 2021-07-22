import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import Authy from "../FB/fb";

function Nav() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
                <Link className="navbar-brand" to="/">At The Movies</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/saved">Saved Movies</Link>
                        </li>
                       <li class="new"><button class="facebook-login"> fb login </button></li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Nav;

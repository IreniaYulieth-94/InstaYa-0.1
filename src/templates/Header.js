import React from 'react';

class Header extends React.Component{

    render(){

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">INSTA <sub>YA</sub></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Sign up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Log in</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
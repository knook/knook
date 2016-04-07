/**
 * Created by olivier on 05/04/2016.
 */
import React, { Component } from 'react';

class Navbar extends Component {

    render () {
        return <nav className="navbar">
            <div className="container-fluid" id="navbar-container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Knook</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <button type="button" className="btn btn-square">
                                <img src="../dist/img/mode_edit_black_18x18.png" alt="newMail"/>
                            </button>
                        </li>

                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"/>
                                <li><a href="#">Separated link</a></li>
                                <li role="separator" class="divider"/>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}

// Prop types validation
Navbar.propTypes = {
};

export default Navbar;

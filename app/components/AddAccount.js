/**
 * Created by olivier on 06/04/2016.
 */
import React, { Component, PropTypes } from 'react';
var Registration = require('./registration/Registration')

class AddAccount extends Component {

    componentDidMount() {
        document.title = "Add Account";
    }

    render() {
        return (
            <div className="container-fluid" id="reg-content">
                <Registration/>
            </div>
        );
    }
}

export default AddAccount;
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
var ipc = require('ipc');

class Prefs extends Component {

    componentDidMount() {
        document.getElementById('addAccount').addEventListener('click', function () {
            ipc.send('toggle-addAccount');
        });
    }

  render() {
    return (
      <div>
        <div className="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>Awsome Prefs</h2>
          <Link to="/addAccount" target="_blank">add account</Link>
      </div>
    );
  }
}

export default Prefs;

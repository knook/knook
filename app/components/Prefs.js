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
      <div id="prefs-content">
          <div className="navbar">
              <div id="backToInbox" className="col-sm-2">
                  <Link to="/">
                      <span className="glyphicon glyphicon-menu-left"/>
                      <span id="backTxt">Back</span>
                  </Link>
              </div>
          </div>
        <h2>Awsome Prefs</h2>
          <Link id="addAccount" to="/prefs">add account</Link>
      </div>
    );
  }
}

export default Prefs;

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Prefs extends Component {

  render() {
    return (
      <div>
        <div className="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>Awsome Prefs</h2>
      </div>
    );
  }
}

export default Prefs;

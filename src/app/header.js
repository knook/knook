/**
 * Created by olivier on 05/04/2016.
 */
import React from 'react/addons';
import Navbar from './components/Navbar';

/*
 * @class Header
 */
class Header {

    render (element) {

        // would be in JSX: <AppRoot state={this.state} />
        var appRootElement = React.createElement(Navbar, {});

        // render to DOM
        if(element) {
            React.render(appRootElement, element);
            return;
        }

        // render to string
        return React.renderToString(appRootElement);
    }

    /*
     * @method render
     * @param {DOM} element
     */
    renderToDOM (element) {
        if(!element) {
            return;
        }

        this.render(element);
    }

    /*
     * @method renderToString
     * @returns {String}
     */
    renderToString () {
        return this.render();
    }
}

export default Header;
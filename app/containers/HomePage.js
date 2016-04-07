import React, {Component} from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3" id="sidebar">
                            <SideBar/>
                        </div>
                        <div className="col-md-9">
                            <Home/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

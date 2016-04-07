/**
 * Created by olivier on 07/04/2016.
 */
import React, { Component } from 'react';

class SideBar extends Component {

    render () {
        var accounts = ['Account1', 'Account2'];
        return <ul className="nav-list">
                <li className="nav-header"  data-toggle="collapse" data-target="#inbox">
                    <span className="nav-icon"><img src="../dist/img/inbox_black_18x18.png" alt="inbox"/></span>Inbox
                    <ul className="nav-list nav-list-sub collapse in" id="inbox">
                        {accounts.map(function (inbox) {
                            return (<li className="nav-content"><a href="#" title="Edit user accounts">{inbox}</a></li>);
                        })}
                    </ul>
                </li>
                <li className="nav-header"  data-toggle="collapse" data-target="#draft">
                    <span className="nav-icon"><img src="../dist/img/my_library_books_black_18x18.png" alt="draft"/></span>Drafts
                    <ul className="nav-list nav-list-sub collapse" id="draft">
                        {accounts.map(function (draft) {
                            return (<li className="nav-content"><a href="#" title="Edit user accounts">{draft}</a></li>);
                        })}
                    </ul>
                </li>
                <li className="nav-header"  data-toggle="collapse" data-target="#trash">
                    <span className="nav-icon"><img src="../dist/img/delete_black_18x18.png" alt="trash"/></span>Trash
                    <ul className="nav-list nav-list-sub collapse" id="trash">
                        {accounts.map(function (trash) {
                            return (<li className="nav-content"><a href="#" title="Edit user accounts">{trash}</a></li>);
                        })}
                    </ul>
                </li>
            </ul>;
    }
}


export default SideBar;
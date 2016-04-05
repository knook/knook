/**
 * Created by olivier on 05/04/2016.
 */
import React from 'react/addons';

class Sidebar extends React.Component {
    /*
     * @method shouldComponentUpdate
     * @returns {Boolean}
     */
    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    /*
     * @method render
     * @returns {JSX}
     */
    render() {
        return <div id="sidebar-wrapper" className="col-lg-2 col-md-3">
            <ul className="nav-list">
                <li className="nav-header"  data-toggle="collapse" data-target="#inbox">
                    <span className="nav-icon"><img src="img/inbox_black_18x18.png" alt="inbox"/></span>Inbox
                    <ul className="nav-list nav-list-sub collapse in" id="inbox">
                        <li className="nav-content"><a href="#" title="Show list of tickets">Open Tickets</a></li>
                        <li className="nav-content"><a href="#" title="Edit user accounts">Accounts / Community</a></li>
                    </ul>
                </li>
                <li className="nav-header"  data-toggle="collapse" data-target="#draft">
                    <span className="nav-icon"><img src="img/my_library_books_black_18x18.png" alt="draft"/></span>Drafts
                    <ul className="nav-list nav-list-sub collapse" id="draft">
                        <li className="nav-content"><a href="#" title="Show list of tickets">Open Tickets</a></li>
                        <li className="nav-content"><a href="#" title="Edit user accounts">Accounts / Community</a></li>
                    </ul>
                </li>
                <li className="nav-header"  data-toggle="collapse" data-target="#trash">
                    <span className="nav-icon"><img src="img/delete_black_18x18.png" alt="trash"/></span>Trash
                    <ul className="nav-list nav-list-sub collapse" id="trash">
                        <li className="nav-content"><a href="#" title="Show list of tickets">Open Tickets</a></li>
                        <li className="nav-content"><a href="#" title="Edit user accounts">Accounts / Community</a></li>
                    </ul>
                </li>
            </ul>
        </div>;
    }
}

// Prop types validation
Sidebar.propTypes = {
};

export default Sidebar;
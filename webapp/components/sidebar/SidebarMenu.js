import React, {Component} from 'react';
import classnames from 'classnames';
import 'style/sidebar/SideBar.scss';

class SidebarMenu extends Component {
    render() {
        return (
            <ul className='ui-sidebar-menu'>
                { this.props.children }
            </ul>
        );
    }
}

export default SidebarMenu;
import React, {Component} from 'react';
import classnames from 'classnames';
import 'style/sidebar/SideBar.scss';

class SidebarMenuItem extends Component {
    render() {
        return (
            <li className='ui-sidebar-menu-item'>
                { this.props.children }
            </li>
        )
    }
}

export default SidebarMenuItem;
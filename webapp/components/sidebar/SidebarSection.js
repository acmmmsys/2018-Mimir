import React, {Component} from 'react';
import classnames from 'classnames';
import 'style/sidebar/SideBar.scss';

class SidebarSection extends Component {
    render() {
        return (
            <section className='ui-sidebar-section'>
                <header className='ui-sidebar-section-header'>
                    { this.props.title }
                </header>
                { this.props.children }
            </section>
        )
    }
}

export default SidebarSection;
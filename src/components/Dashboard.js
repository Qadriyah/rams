import React, { Component } from 'react'
import SideNav from './Nav/SideNav';

class Dashboard extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <div>
                    <SideNav />
                </div>
                {children}
            </div>
        )
    }
}

export default Dashboard;

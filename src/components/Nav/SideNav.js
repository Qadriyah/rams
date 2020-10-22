import React, { Component } from 'react'
import { groups } from '../../routes';

class SideNav extends Component {
    render() {
        return (
            <div>
                {groups[0].routes.map((route) => {
                    console.log(route, '>>>>>>>>>>>>>>>>??????????');
                    return (
                        <div>
                            {route.title}
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default SideNav;

import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            fullScreen: true,
        };
    }
    render() {
        return (
            <div >注册
             </div>
        )
    }
}
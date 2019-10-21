import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from "react-router-dom";
import TabExample from '../../werkzeugs/navBar.jsx'


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
            <div style={{ background: '#fff',height:'100%'}}>
                <div>
                    <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.go(-1)}
                        rightContent={<Link to='/reg' style={{ color: '#108ee9' }}>注册</Link>}></NavBar>
                </div>
                <TabExample></TabExample>
            </div>
        )
    }
}
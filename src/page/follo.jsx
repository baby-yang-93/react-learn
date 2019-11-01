import React from 'react';
import TabExample from '../werkzeugs/navBar.jsx'

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
            <div >
                <div>
                    <TabExample titleName='好友动态' titleName2='关注的人'></TabExample>
                </div>
            </div>
        )
    }
}
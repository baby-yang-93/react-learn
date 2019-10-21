import React from 'react';
import { TabBar } from 'antd-mobile';
import '../App.css';

import {Link} from "react-router-dom";


export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {pageText}
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar unselectedTintColor="#ccc" tintColor="#F84E60" barTintColor="white">
          <TabBar.Item title="文章" key="Life"
            icon={<div style={{ width: '22px', height: '22px', background: 'url(img/articleN.png) center center /  21px 21px no-repeat' }} />}
            selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(img/articleY.png) center center /  21px 21px no-repeat' }} />}
            selected={this.state.selectedTab === 'blueTab'} onPress={() => { this.setState({ selectedTab: 'blueTab', }); }}
            data-seed="logId">
            {<div style={{ backgroundColor: '#0AC7BD', height: '100%', textAlign: 'center' }}>
              <Link to="/login" className='login'>登录</Link>
              <Link to='/reg' className='login'>注册</Link>
            </div>}
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{ width: '22px', height: '22px', background: 'url(img/followN.png) center center /  21px 21px no-repeat' }} />}
            selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(img/followY.png) center center /  21px 21px no-repeat' }} />}
            title="关注" key="Koubei" selected={this.state.selectedTab === 'redTab'}
            onPress={() => { this.setState({ selectedTab: 'redTab', }); }}
            data-seed="logId1">
            {<div style={{ backgroundColor: '#F84E60', height: '100%', textAlign: 'center' }}>

            </div>}
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{ width: '22px', height: '22px', background: 'url(img/msgN.png) center center /  21px 21px no-repeat' }} />}
            selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(img/msgY.png) center center /  21px 21px no-repeat' }} />}
            title="消息" key="Friend" dot selected={this.state.selectedTab === 'greenTab'}
            onPress={() => { this.setState({ selectedTab: 'greenTab', }); }}>
            {<div style={{ backgroundColor: '#41aae7', height: '100%', textAlign: 'center' }}>

            </div>}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'img/myN.png' }} selectedIcon={{ uri: 'img/myY.png' }} title="我的" key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => { this.setState({ selectedTab: 'yellowTab', }); }}>
            {<div style={{ backgroundColor: 'green', height: '100%', textAlign: 'center' }}>

            </div>}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

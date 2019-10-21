import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import BasicInputExample from '../werkzeugs/InputItem.jsx'
import Basic from '../werkzeugs/aaa.jsx'

const tabs = [
    { title: '手机登录' },
    { title: '账号登录' },
];

const TabExample = () => (
    <div>
        <WhiteSpace />
        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <BasicInputExample />
                {/* <Basic /> */}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>222</div>
        </Tabs>
        <WhiteSpace />
    </div>
);
export default TabExample;

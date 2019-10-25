import React from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import { Button, WingBlank } from 'antd-mobile';
import axios from 'axios';
class BasicInputExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getYzm: '获取验证码',
            type: false,
            count: 5
        };
    }

    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    yzm = () => {
        this.setState({ getYzm: this.state.count + 's后重新发送', type: "true" });
        axios.get('http://api.experience.lexustestdrive.cn')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    login = () => {
        alert(this.props.form.getFieldValue('inputtitle1'))
    }

    render() {
        const { getFieldProps, getFieldValue } = this.props.form;
        return (
            <div>
                <List style={{ paddingTop: '30px' }}>
                    <InputItem
                        {...getFieldProps('inputtitle1')}
                        placeholder="title can be icon，image or text"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        {...getFieldProps('inputtitle2')}
                        placeholder="title can be icon，image or text"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                </List>
                <Button type="primary" inline size="small" style={{ marginRight: '4px' }}
                    onClick={this.yzm} disabled={this.state.type}>{this.state.getYzm}</Button>

                <Button type="warning" onClick={this.login}>登录</Button><WhiteSpace />
            </div>
        );
    }
}
export default createForm()(BasicInputExample);


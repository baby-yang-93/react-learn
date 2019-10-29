import React from 'react';
import { List, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import { Button, WingBlank } from 'antd-mobile';
import axios from 'axios';
class BasicInputExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getYzm: '获取验证码',
            type: false,
            count: 5,
            hasError: false,
            value: '',
            errMsg: '111'
        };
    }

    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    yzm = () => {
        this.setState({ getYzm: this.state.count + 's后重新发送', type: true });

        axios.get('http://api.experience.lexustestdrive.cn')
            .then(res => {
                var aaa = setInterval(() => {
                    let count = this.state.count - 1;
                    this.setState({ getYzm: count + "s后重新发送", count: count });
                    if (count == 0) {
                        this.setState({ getYzm: '获取验证码', type: false, count: 5 });
                        clearInterval(aaa);
                    }
                }, 1000);
            }).catch(error => {
                console.log(error);
            })
    }
    login = () => {
        alert(this.props.form.getFieldValue('inputtitle1'))
    }
    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }
    onBlur = () => {
        if (this.state.hasError) {
            console.log('jingguol ')
            this.setState({ errMsg: '请输入正确的手机号' })
        }
    }
    onChange = (value) => {

        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
        });
    }

    render() {
        const { getFieldProps, getFieldValue, getFieldError } = this.props.form;
        let errors;
        return (
            <div>
                <List style={{ paddingTop: '30px' }}>
                    <InputItem
                        {...getFieldProps('inputtitle1')}
                        placeholder="title can be icon，image or text"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <p>错误提示</p>
                    <InputItem
                        {...getFieldProps('aaa', { onChange() { }, rules: [{ aaa: true }] })}
                        placeholder="title can be icon，image or text"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                </List>
                <Button type="primary" inline size="small" style={{ marginRight: '4px' }}
                    onClick={this.yzm} disabled={this.state.type}>{this.state.getYzm}</Button>
                <Button type="warning" onClick={this.login, this.submit}>登录</Button><WhiteSpace />
                <hr />
                <InputItem
                    type="phone"
                    placeholder="input your phone"
                    error={this.state.hasError}
                    onChange={this.onChange}
                    value={this.state.value}
                    onBlur={this.onBlur}
                >手机号码</InputItem>
                <p>{this.state.errMsg}</p>
            </div>
        );
    }
}
export default createForm()(BasicInputExample);


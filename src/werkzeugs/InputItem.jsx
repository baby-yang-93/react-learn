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
            errMsg: ''
        };
    }
    // 在render之前调用
    componentWillMount() {

    }
    //   在render之后调用
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
                    if (count === 0) {
                        this.setState({ getYzm: '获取验证码', type: false, count: 5 });
                        clearInterval(aaa);
                    }
                }, 1000);
            }).catch(error => {
                console.log(error);
            })
    }
    login = () => {
        alert(this.props.form.getFieldValue('phone'))
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
        var that= this;
        return (
            <div style={{ width: '90%' }}>
                <List style={{ paddingTop: '30px' }}>
                    <InputItem {...getFieldProps('phone', { onChange(v) {
                        if (v.replace(/\s/g, '').length < 11) {
                            that.setState({ hasError: true,errMsg:'' });
                        } else { 
                            that.setState({ hasError: false,});
                        }
                        that.setState({v});
                    }, rules: [{ number: true }] })} placeholder="请输入您的手机号"
                        onBlur={this.onBlur} error={this.state.hasError}></InputItem>
                    <p>{this.state.errMsg}</p>
                    <InputItem {...getFieldProps('psw', { onChange() { }, rules: [{ psw: true }] })} placeholder="请输入您的密码"
                        onBlur={this.onBlur} error={this.state.hasError} ></InputItem>
                </List>
                <Button type="primary" inline size="small" style={{ marginRight: '4px' }} onClick={this.yzm} disabled={this.state.type}>{this.state.getYzm}</Button>
                <Button type="warning" onClick={this.login, this.submit}>登录</Button><WhiteSpace />
            </div>
        );
    }
}
export default createForm()(BasicInputExample);


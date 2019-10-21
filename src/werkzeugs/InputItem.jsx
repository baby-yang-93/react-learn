import React from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import { Button, WingBlank } from 'antd-mobile';
import axios from 'axios';

class BasicInputExample extends React.Component {

    constructor(props) {
        super(props)

        this.count = 0;

        this.login = this.login.bind(this);
        this.state = {
            getYzm: '获取验证码',
            buttonDisabled: false
        };
    }

    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }

    countdown = () => {
        if (this.count > 0) {
            this.setState({ getYzm: this.count-- + "秒后重试", buttonDisabled: true });
            window.setTimeout(() => { this.countdown(this.count) }, 1000);
        } else {
            this.setState({ getYzm: '获取验证码', buttonDisabled: false });
        }
    }

    sendCaptcha = () => {
        axios.get('http://api.apply-dev.lexustestdrive.cn', {
            params: {
                phone: this.props.form.getFieldValue('phone')
            }
        }).then((response) => {
            this.count = 5;
            this.countdown();
            console.log(response);
        });
    }

    login() {
        alert(this.props.form.getFieldValue('password'))
        // this.$axios({
        //     method: "get",
        //     url: 'http://api.apply-dev.lexustestdrive.cn+ExportApplyManage',
        //     params: {
        //         login_name: ,
        //         login_pwd: ,
        //         valid_code:
        //     }
        // }).then(res => {
        //     if(res.data.success) {

        //     } else {

        //     }
        // });
    }

    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <List style={{ paddingTop: '30px' }}>
                    <InputItem
                        {...getFieldProps('phone', {
                            'validateTrigger': 'onBlur',
                            'rules': [
                                { type: 'number', required: true, message: "%s必须是%s" }
                            ]
                        })}
                        placeholder="手机号"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        placeholder="密码"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                </List>
                {/* 下面是错误输出 */}
                {(errors = getFieldError('phone')) ? errors.join(',') : null}
                <br />
                <Button type="primary" inline size="small" style={{ marginRight: '4px' }}
                    onClick={this.sendCaptcha}
                    disabled={this.state.buttonDisabled}
                >{this.state.getYzm}</Button>
                <Button type="warning" onClick={this.login}>登录</Button><WhiteSpace />
            </div>
        );
    }
}
export default createForm()(BasicInputExample);


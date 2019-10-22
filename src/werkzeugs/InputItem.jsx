import React from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import { Button, WingBlank } from 'antd-mobile';

class BasicInputExample extends React.Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.yzm = this.yzm.bind(this);
        this.state = {
            getYzm: '获取验证码',
            type:true,
        };
    }

    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    yzm(){
        this.setState({type:false})
        console.log(this.state.type)
        // if(this.state.type){
        //     console.log(1111)
        // }else{
        //     console.log(222)
        // }
    }
    login() {
        alert(this.props.form.getFieldValue('inputtitle1'))
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
                onClick={this.yzm}>{this.state.getYzm}</Button>
              
                <Button type="warning" onClick={this.login}>登录</Button><WhiteSpace />
            </div>
        );
    }
}
export default createForm()(BasicInputExample);


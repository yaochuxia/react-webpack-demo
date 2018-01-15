import React from 'react';
import { Row,Col, Menu, Icon,Tabs,Message,Form,Input,Button,CheckBox,Modal,Link } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    };
    setModalVisible(value){
        this.setState({modalVisible: value});
    };
    handleClick(e){
        if(e.key=='register'){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }else{
            this.setState({current: e.key});
        }
    };
    handleSubmit(){

    };
    render(){
        let { getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key='logout' className="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>  
                &nbsp;&nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button">退出</Button>
              </Menu.Item>
            : <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登录
              </Menu.Item>;
        return(
            <header>
                <Row>
                    <Col span={1}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/images/logo.png"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={18}>
                        <Menu  mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                               <Icon type="appstore" /> 头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                               <Icon type="appstore" /> 社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                               <Icon type="appstore" /> 国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                               <Icon type="appstore" /> 国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                               <Icon type="appstore" /> 娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                               <Icon type="appstore" /> 体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                               <Icon type="appstore" /> 科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                               <Icon type="appstore" /> 时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入你的账号" {...getFieldProps('r_userName')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入你的密码" {...getFieldProps('r_password')} />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type="password" placeholder="请再次输入你的密码" {...getFieldProps('r_comfirmPassword')} />
                                        </FormItem>
                                        <Button type="primary"htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="登录" key="2">Content of Tab Pane 2</TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={1}></Col>  
                </Row>
            </header>
        )
    }
}
export default PCHeader = Form.create({})(PCHeader);

import React from 'react';
import {Row, Col,Menu,Icon,Tabs,message,Card, Form,Input,Button,CheckBox,Modal,notification} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router'

class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: '',
        };
    };

    componentDidMount(){
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comments: json});
        })
    };

    handleSubmit(e)
    {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
            this.componentDidMount();
        })
    };
    addUserCollection(e){
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions)
        .then(response=>response.json())
        .then(json =>{
            notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'})
        })
    }
    render() {
        let {getFieldProps} = this.props.form;
        const {comments} = this.state;
        const commnetList = comments.length
        ? comments.map((comment, index) => (
            <Card key={index} title={comment.UserName} extra={<a href = "#"> 发布于 {comment.datetime} </a>}>
                <p>{comment.Comments}</p>
            </Card>
        ))
        :
        '没有加载到任何评论';
        return (
            <Row>
                <Col span={24}>
                    {commnetList}
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label="您的评论">
                            <Input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initialValue: ''})} />
                        </FormItem>
                        <Button type="primary" htmlType="submit">提交评论</Button>
                        &nbsp; &nbsp;
                        <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
                    </Form>
                </Col>
            </Row>
        );
    };
}
export default CommonComments = Form.create({})(CommonComments);
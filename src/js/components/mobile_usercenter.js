import React from 'react';
import {Row,Col,Tabs,Upload,Icon,Modal,Card} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

const TabPane = Tabs.TabPane;

export default class MobileUserCenter extends React.Component{
 constructor(){
        super();
        this.state = {
            usercollection: '',
            usercomments: '',
            previewImage: '',
            previewVisible: false
        }
    };
    componentDidMount (){
        var myFetchOptions = {
                method: 'GET'
            };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
        .then(response=>response.json())
        .then(json=>{
            this.setState({usercollection:json});
        });

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
        .then(response=>response.json())
        .then(json=>{
            this.setState({usercomments:json});
        });  

    };    
    render(){
        const {usercollection,usercomments} = this.state;
        const usercollectionList = usercollection.length ?
        usercollection.map((ucs,index)=>(
                <Card key={index} title={ucs.uniquekey} extra={<a target="_blank" href={`/#/details/${ucs.uniquekey}`}>查看</a>}>
                    <p>{ucs.Title}</p>
                </Card>
        ))
        : '您还没有收藏任何的新闻，快去收藏一些新闻吧.';

        const usercommentsList = usercomments.length ?
        usercomments.map((comment,index)=>(
                <Card key={index} title={`您于${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                    <p>{comment.Title}</p>
                </Card>
        ))
        : '您还没有收藏任何的新闻，快去收藏一些新闻吧.';

        return(
            <div>
                <MobileHeader/>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">{usercommentsList}</TabPane>
                            <TabPane tab="头像设置" key="3">Content of Tab Pane 3</TabPane>
                        </Tabs>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <MobileFooter/>
            </div>
        )
    }
}


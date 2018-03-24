import React from 'react';
import {Row,Col,BackTop} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';


export default class MobileNewsDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            newsItem:'',
        }
    };
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    };
    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <Row className="container">
                    <Col span={1}></Col>
                    <Col span={14}>
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                    </Col>
                    <Col span={8}>
                        <PCNewsImageBlock count={6} type="guoji" width="370px" cartTitle="国际头条" imageWidth="112px"/>                   
                        <PCNewsImageBlock count={6} type="yule" width="370px" cartTitle="娱乐头条" imageWidth="112px"/> 
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <CommonComments uniquekey={this.props.match.params.uniquekey}/>
                <PCFooter></PCFooter>
                <BackTop/>

            </div>
        )
    }
}
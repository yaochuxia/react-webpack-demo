import React from 'react';
import {Row,Col,BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
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
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <BackTop/>
                <CommonComments uniquekey={this.props.match.params.uniquekey}/>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}
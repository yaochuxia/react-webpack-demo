import React from 'react';
import {Row, Col,Carousel,Tabs} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <Carousel autoplay>
                                <div><img src="./src/images/carousel_1.jpg" width='400' height='350' /></div>
                                <div><img src="./src/images/carousel_2.jpg" width='400' height='350' /></div>
                                <div><img src="./src/images/carousel_3.jpg" width='400' height='350' /></div>
                                <div><img src="./src/images/carousel_4.jpg" width='400' height='350' /></div>
                            </Carousel>
                        </div>
                        
                        <Tabs className="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={8} type="top" width='100%' bordered='false' /> 
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={8} type="guoji" width='100%' bordered='false' /> 
                            </TabPane>
                        </Tabs> 
                        <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>                   
                        <PCNewsImageBlock count={6} type="yule" width="400px" cartTitle="娱乐头条" imageWidth="112px"/>                   
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
} 
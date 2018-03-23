import React from 'react';
import {Row, Col,Carousel,Tabs} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product'

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22} className="container">
                        <div className="mb15">
                            <div className="leftContainer">
                                <Carousel autoplay>
                                    <div><img src="./src/images/carousel_1.jpg" width='370' height='370' /></div>
                                    <div><img src="./src/images/carousel_2.jpg" width='370' height='370' /></div>
                                    <div><img src="./src/images/carousel_3.jpg" width='370' height='370' /></div>
                                    <div><img src="./src/images/carousel_4.jpg" width='370' height='370' /></div>
                                </Carousel>
                            </div>
                            
                            <Tabs className="tabs_news">
                                <TabPane tab="新闻" key="1">
                                    <PCNewsBlock count={15} type="top" width='370' bordered='false' /> 
                                </TabPane>
                                <TabPane tab="国际" key="2">
                                    <PCNewsBlock count={15} type="guoji" width='370' bordered='false' /> 
                                </TabPane>
                            </Tabs> 
                            <Tabs className="tabs_news">
                                <TabPane tab="我的产品" key="1">
                                    <PCProduct />
                                </TabPane>
                            </Tabs>
                            <div className="clear"></div>
                        </div>
                        <div className="mb15">
                            <PCNewsImageBlock count={3} type="guoji" width="100%" cartTitle="国际头条" imageWidth="112px"/>                   
                            <PCNewsImageBlock count={3} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
                            <PCNewsImageBlock count={3} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
                            <div className="clear"></div>
                        </div>
                        <PCNewsImageBlock count={7} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>

                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }
} 
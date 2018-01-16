import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                    <Tabs >
                        <TabPane tab="头条" key="1">
                            <MobileList count={15} type="toutiao"/>
                        </TabPane>
                        <TabPane tab="社会" key="2">
                            <MobileList count={15} type="shehui"/>
                        </TabPane>
                        <TabPane tab="国内" key="3">
                            <MobileList count={15} type="guonei"/>
                        </TabPane>
                        <TabPane tab="国际" key="4">
                            <MobileList count={15} type="guoji"/>
                        </TabPane>
                        <TabPane tab="娱乐" key="5">
                            <MobileList count={15} type="yule"/>
                        </TabPane>
                        <TabPane tab="体育" key="6">
                            <MobileList count={15} type="tiyu"/>
                        </TabPane>
                        <TabPane tab="科技" key="7">
                            <MobileList count={15} type="keji"/>
                        </TabPane>
                        <TabPane tab="时尚" key="8">
                            <MobileList count={15} type="shishang"/>
                        </TabPane>
                    </Tabs>
                <MobileFooter/>
            </div>
        )
    }
}
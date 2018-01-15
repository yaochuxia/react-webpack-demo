import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                    <Tabs >
                        <TabPane tab="Tab 1" key="1">头条</TabPane>
                        <TabPane tab="Tab 2" key="2">社会</TabPane>
                        <TabPane tab="Tab 3" key="3">国内</TabPane>
                        <TabPane tab="Tab 4" key="4">国际</TabPane>
                        <TabPane tab="Tab 5" key="5">娱乐</TabPane>
                        <TabPane tab="Tab 6" key="6">体育</TabPane>
                        <TabPane tab="Tab 7" key="7">科技</TabPane>
                        <TabPane tab="Tab 8" key="8">时尚</TabPane>
                    </Tabs>
                <MobileFooter/>
            </div>
        )
    }
}
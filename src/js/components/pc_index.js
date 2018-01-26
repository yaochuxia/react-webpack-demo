import React from 'react';
import { Row,Col } from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_newscontainer'
import PCProduct from './pc_product'


export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}


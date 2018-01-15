import React from 'react';

export default class MobileHeader extends React.Component{
    render(){
        return(
            <div>
                <div id="mobileheader">
                    <header>
                        <img src="./src/images/logo.png" alt="logo"/>
                        <span>ReactNews</span>
                    </header>
                </div>
            </div>
        )
    }
}

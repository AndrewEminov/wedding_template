import React from 'react';
import Header from "./Header/Header";

import  './mainPage_styles.scss';

function MainPage() {

    return (
        <div className={'mainPage_container'}>
            <Header/>
            <div className={'content'}>
                <div className={'content about'}></div>
                <div className={'content offer'}></div>
                {/*<div className={'content portfolio'}></div>*/}
                {/*<div className={'content testimonials'}></div>*/}
                {/*<div className={'content contact_us'}></div>*/}
                {/*<div className={'content subscribe'}></div>*/}
            </div>
            <div className={'footer'}></div>
        </div>
    );
}

export default MainPage;
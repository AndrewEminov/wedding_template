import React from 'react';

function LogoComponent({linkImageClass, imageClass, imageContent}) {

    return (
        <a className={linkImageClass} href={'/'}>
            <img className={imageClass} src={imageContent} alt=""/>
        </a>
    );
}

export default LogoComponent;
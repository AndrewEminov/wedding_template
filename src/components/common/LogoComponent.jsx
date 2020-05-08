import React from 'react';

function LogoComponent({linkImgClass, linkImgHref, imageClass, srcImage}) {

    return (
        <a className={linkImgClass} >
            <img className={imageClass} src={srcImage} alt=""/>
        </a>
    );
}

export default LogoComponent;
import React from 'react';
import { Button } from 'react-bootstrap';

function ImageComponent({imageClass, ContainerImageClass, imageSrc}) {


    return (
        <div className={ContainerImageClass}>
            <img className={imageClass} src={imageSrc} alt={'image'}/>
        </div>
    );
}

export default ImageComponent;
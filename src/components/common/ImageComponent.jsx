import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ImageComponent({ContainerImageClass, imageSrc}) {


    return (
        <div className={ContainerImageClass}>

            <LazyLoadImage
                wrapperClassName={'imageContainer'}
                alt={'image'}
                effect="blur"
                src={imageSrc} />

            {/*<img className={imageClass} src={imageSrc} alt={'image'}/>*/}
        </div>
    );
}

export default ImageComponent;
import React from 'react';

function TitleComponent({titleClass, titleContent}) {

    return (
        <h1 className={titleClass}>{titleContent}</h1>
    );
}

export default TitleComponent;

import React from 'react';

function TextComponent({textClass, textContent}) {

    return (
        <p className={textClass}>{textContent}</p>
    );
}

export default TextComponent;

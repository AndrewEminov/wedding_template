import React from 'react';
import { Button } from 'react-bootstrap';

function BtnComponent({btnClass, btnContent, variant, href}) {

    return (
        <Button href={href} className={btnClass} variant={variant}>{btnContent}</Button>
    );
}

export default BtnComponent;
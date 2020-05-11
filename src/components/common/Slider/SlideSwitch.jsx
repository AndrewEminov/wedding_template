import React from 'react';


function SlideSwitch({counter, changeSlide, length, slideRef, step, rightImage, leftImage}) {

    const handleClickPrev = () => {

       let currentCount = counter-step;

       if (!currentCount) currentCount = length;

        changeSlide(currentCount, slideRef.current, 'pref');
    };

    const handleClickNext = () => {

        let currentCount = counter+step;

        if (currentCount > length) currentCount = 1;

        changeSlide(currentCount, slideRef.current, 'next');
    };

    return (
        <div className={'wrapperBtns'}>
            <button data-btn="prev" onClick={handleClickPrev}><img src={leftImage}  alt=""/></button>
            <div className={'counter'}>{counter}/{length}</div>
            <button data-btn="next" onClick={handleClickNext}><img src={rightImage} alt=""/></button>
        </div>
    );
}

export default SlideSwitch;
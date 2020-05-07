import React from 'react';


function SlideSwitch({counter, changeSlide, length, slideRef, step}) {

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
        <div className={''}>
            <button data-btn="prev" onClick={handleClickPrev}>{'<-'}</button>
            <div>{counter}/{length}</div>
            <button data-btn="next" onClick={handleClickNext}>{'->'}</button>
        </div>
    );
}

export default SlideSwitch;
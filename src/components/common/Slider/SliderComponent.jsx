import React, {useEffect, useRef, useState} from 'react';
import ImageComponent from "../ImageComponent";
import SlideSwitch from "./SlideSwitch";
import './styles.scss';

import Fullscreen from "react-full-screen";

function SliderComponent({step, counter, length, imageSlides, SliderClass, wrapperSlidesClass, sliderBtnsClass}) {

    const [isFull, setIsFull] = useState(false);
    const goFull = () => {
        setIsFull(true);
    };

    const [cLength, setLength] = useState(length);
    const [cCounter, setCounter] = useState(counter);

    const slider = useRef(null);

    const changeSlide = (currentCount, slideRef, btn) => {

        if (btn === 'next'){
            if (slideRef.childNodes[cCounter] === undefined){
                slideRef.childNodes[cCounter - 1].classList.remove("active");
                slideRef.childNodes[0].classList.add("active");
            }else {
                slideRef.childNodes[cCounter - 1].classList.remove("active");
                slideRef.childNodes[cCounter].classList.add("active");
            }
        }else {
            if (slideRef.childNodes[cCounter-2] === undefined) {
                slideRef.childNodes[cCounter-1].classList.remove("active");
                slideRef.childNodes[cLength-1].classList.add("active");
            }else {
                slideRef.childNodes[cCounter-1].classList.remove("active");
                slideRef.childNodes[cCounter-2].classList.add("active");
            }
        }

        setCounter(currentCount);
    };
    return (
        <div className={SliderClass}>
            <Fullscreen
            enabled={isFull}
            onChange={isFull => setIsFull(isFull)}
            >
                <div ref={slider}  className={wrapperSlidesClass}>
                    {imageSlides && imageSlides.map((item, index)=>
                        <ImageComponent imageSrc={item.src} imageClass={item.imgClass} ContainerImageClass={`img ${index===0 ? 'active' : ''}`}/>
                    )}
                </div>
            </Fullscreen>

            <div className={sliderBtnsClass}>
                <SlideSwitch changeSlide={changeSlide} slideRef={slider} length={cLength} counter={cCounter} step={step}/>
                <button onClick={goFull} className={'fullscreen'}>X</button>
            </div>
        </div>
    );
}
export default SliderComponent;
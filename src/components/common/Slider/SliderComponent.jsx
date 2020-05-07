import React, {useEffect, useRef, useState} from 'react';
import ImageComponent from "../ImageComponent";
import SlideSwitch from "./SlideSwitch";
import './styles.scss';

import Fullscreen from "react-full-screen";


function SliderComponent({imageClass, ContainerImageClass, imageSrc}) {

    const [isFull, setIsFull] = useState(false);

    const goFull = () => {
        setIsFull(true);
    };

    const [length, setLength] = useState(3);
    const [counter, setCounter] = useState(1);

    const slider = useRef(null);

    const changeSlide = (currentCount, slideRef, btn) => {

        if (btn === 'next'){
            if (slideRef.childNodes[counter] === undefined){
                slideRef.childNodes[counter - 1].classList.remove("active");
                slideRef.childNodes[0].classList.add("active");
            }else {
                slideRef.childNodes[counter - 1].classList.remove("active");
                slideRef.childNodes[counter].classList.add("active");
            }
        }else {
            if (slideRef.childNodes[counter-2] === undefined) {
                slideRef.childNodes[counter-1].classList.remove("active");
                slideRef.childNodes[length-1].classList.add("active");
            }else {
                slideRef.childNodes[counter-1].classList.remove("active");
                slideRef.childNodes[counter-2].classList.add("active");
            }
        }

        setCounter(currentCount);

        //setStatus('resolve');
    };

    return (

        <div className={'Slider'}>
            <Fullscreen
            enabled={isFull}
            onChange={isFull => setIsFull(isFull)}
            >
                <div ref={slider}  className={'wrapperSlides'}>
                    <ImageComponent imageSrc={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'} imageClass={''} ContainerImageClass={`img active`}/>
                    <ImageComponent imageSrc={'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'} imageClass={''} ContainerImageClass={`img`}/>
                    <ImageComponent imageSrc={'https://static.toiimg.com/photo/72975551.cms'} imageClass={''} ContainerImageClass={`img`}/>
                </div>
            </Fullscreen>

            <div className={'sliderBtns'}>
                <SlideSwitch changeSlide={changeSlide} slideRef={slider} length={length} counter={counter} step={1}/>
                <button onClick={goFull} className={'fullscreen'}>X</button>
            </div>
        </div>

    );
}

export default SliderComponent;
import React from 'react';
import ImageComponent from "../../common/ImageComponent";
import TitleComponent from "../../common/TitleComponent";
import InfoBlockOffer from "./InfoBlockOffer";

import Camera from "../../../images/offerIcons/camera-photo-gallery-photography-picture 1.png";
import Laugh from "../../../images/offerIcons/laugh 1.svg";
import ShapeCircle from "../../../images/offerIcons/shape-circle 1.svg";
import TapHand from "../../../images/offerIcons/tap-hand-gesture-touch-double-tap 1.svg";
import VideoCamera from "../../../images/offerIcons/video-camera 1.svg";
import OfferImage from "../../../images/What we offer image.jpg";
import BtnComponent from "../../common/BtnComponent";


function ContentOffer() {
    return (
        <div className={'containerOffer'}>
            <div className={'contentOffer'}>
                <TitleComponent titleClass={'offerTitle'} titleContent={'What we offer'}/>
                <div>
                    <div className={'containerInfoOffer'}>
                        <InfoBlockOffer imgSrc={Camera}
                                        OfferClass={'infoBlockOffer'}
                                        TextClass={'textInfo'}
                                        TextContent={'We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.'}
                                        TitleClass={'titleInfo'}
                                        TitleContent={'Modern Photo and Video'}
                                        link={true}
                                        lineClass={'line a'}/>

                        <InfoBlockOffer imgSrc={ShapeCircle}
                                        OfferClass={'infoBlockOffer'}
                                        TextClass={'textInfo'}
                                        TextContent={'Have you ever dreamed of having a breathtaking movi-like video? Our professional photographers are highly skilled in using air-drones'}
                                        TitleClass={'titleInfo'}
                                        TitleContent={'Air-drone photography'}
                                        lineClass={'line b'}/>

                        <InfoBlockOffer imgSrc={TapHand}
                                        OfferClass={'infoBlockOffer'}
                                        TextClass={'textInfo'}
                                        TextContent={'Our team provides you with brilliant photo editing in really short terms. You will get the amazing photos in the blink of your eye.'}
                                        TitleClass={'titleInfo'}
                                        TitleContent={'Professional retoushing'}
                                        lineClass={'line c'}/>

                        <InfoBlockOffer imgSrc={VideoCamera}
                                        OfferClass={'infoBlockOffer'}
                                        TextClass={'textInfo'}
                                        TextContent={'Our main goal is to achieve the outstanding results. So we are constantly in search of new updates of our equipment.'}
                                        TitleClass={'titleInfo'}
                                        TitleContent={'Actual Equipment'}
                                        lineClass={'line d'}/>

                        <InfoBlockOffer imgSrc={Laugh}
                                        OfferClass={'infoBlockOffer extend'}
                                        TextClass={'textInfo'}
                                        TextContent={'We believe that your wedding is one of the most important days in your life, ' +
                                        'that is why our company will do our best to make it unforgetable and peculiar. Our ' +
                                        'team can organize an extraordinary ceremony for you. If case you do not know' +
                                        'exactly what you want - why dont you consider choosing to make your wedding ' +
                                        'ceremony outside. You can choose any place you like - from the park in your ' +
                                        'city to the bank of the seaside.'} TitleClass={'titleInfo'} TitleContent={'Travel wedding photography'}
                                        lineClass={'line e'} extendInfoBlock={true}/>
                    </div>
                </div>
                <BtnComponent btnClass={'button_ContactUs'} href={'#'} btnContent={'Contact us'} variant={''}/>
            </div>
            <ImageComponent ContainerImageClass={'contentOfferImg'} imageSrc={OfferImage}/>
        </div>
    )
}

export default ContentOffer;
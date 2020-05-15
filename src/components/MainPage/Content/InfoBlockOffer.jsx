import React from 'react';
import TitleComponent from "../../common/TitleComponent";
import TextComponent from "../../common/TextComponent";

import YouTube from "../../../images/offerIcons/youtube-black 1.png";


function InfoBlockOffer({OfferClass, TitleClass, TextClass, imgSrc, TitleContent, TextContent, link, lineClass, extendInfoBlock}) {
    return (
        <div className={OfferClass}>
            <div className={'iconWrapper'}>
                {extendInfoBlock && <p className={lineClass}/>}
                <img src={imgSrc} alt=""/>
                <p className={lineClass}/>
            </div>
            <div className={'infoWrapper'}>
                <TitleComponent titleClass={TitleClass} titleContent={TitleContent}/>
                <TextComponent textClass={TextClass} textContent={TextContent}/>

                {link &&
                    <div className={'youTubeLink'}>
                        <img src={YouTube} alt=""/>
                        <a href="#">Check our Youtube</a>
                    </div>
                }
            </div>

        </div>
    )
}

export default InfoBlockOffer;
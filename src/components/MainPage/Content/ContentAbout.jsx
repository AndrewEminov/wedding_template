import React from 'react';
import ImageComponent from "../../common/ImageComponent";
import AboutImage from "../../../images/About Us Image.jpg";

import './contentAbout.scss';
import TextComponent from "../../common/TextComponent";
import TitleComponent from "../../common/TitleComponent";
import BtnComponent from "../../common/BtnComponent";

function ContentAbout() {
    return (
        <div className={'containerAbout'}>
            <ImageComponent ContainerImageClass={'contentAboutImg'} imageSrc={AboutImage}/>
            <div className={'contentAbout'}>
                <div className={'contentAboutMessage'}>
                    <a href="#" className={'linkAbout'}><TextComponent textContent={'wedding photo video'}/></a>
                    <TitleComponent titleContent={'Why do we differ from others?'} titleClass={'titleAbout'}/>
                    <div className={'textAbout'}>
                        <TextComponent textContent={"On your wedding day, the photographer and cinematographer can become interlopers to your day. We do things differently."}/>
                        <TextComponent textContent={"Your relationship and your wedding day are entirely unique. We are there to blend so seamlessly in to the defining moments that you are always at ease, " +
                                       "always natural. The result is that we capture the essence which makes your special day what it is in a story-telling style. " +
                                       "We feel honoured to fulfil this role. We care deeply that we preserve a true and inspiring portrayal of your day."}/>
                    </div>
                    <BtnComponent variant={'outlined'} btnContent={'Check our blog'} href={'#'} btnClass={'btnAbout'}/>
                </div>
            </div>
        </div>
    )
}

export default ContentAbout;
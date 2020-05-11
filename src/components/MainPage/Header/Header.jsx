import React from 'react';
import MenuComponent from "../../common/MenuComponent";
import LogoComponent from "../../common/LogoComponent";
import TitleComponent from "../../common/TitleComponent";
import TextComponent from "../../common/TextComponent";
import BtnComponent from "../../common/BtnComponent";
import SliderComponent from "../../common/Slider/SliderComponent";

import HeaderLogo from "../../../images/Logo.png";
import HeaderImg from "../../../images/Mask Group.jpg";
import AboutImg from "../../../images/About Us Image.jpg";
import OfferImg from "../../../images/What we offer image.jpg";
import LeftIcon from "../../../images/arrows/Left.png";
import RightIcon from "../../../images/arrows/Right.png";
import FullScreenIcon from "../../../images/arrows/full-screen-arrow-expand-maximize-enlarge 1.png";


function Header() {
    return (
        <header className={'header'}>
            <div className={'headerContent'}>
                <div className={'wrapperMenu'}>
                    <LogoComponent imageClass={'logo'} linkImgClass={'link_logo'} linkImgHref={'/'} srcImage={HeaderLogo}/>
                    <MenuComponent menuClass={'menu'} menuItemClass={'menu_item'} MenuList={[
                        {value:'Home', href:"#"},
                        {value:'About', href:"#"},
                        {value:'What we offer?', href:"#"},
                        {value:'Portfolio', href:"#"},
                        {value:'Testimonials', href:"#"}]}/>
                </div>
                <div className={'wrapperContent'}>
                    <TitleComponent titleClass={'title'} titleContent={'We catch your happy moments'}/>
                    <TextComponent textClass={'description'} textContent={'By choosing our agency you will obtain ' +
                    'unforgetable memories and amazing experience.' +
                    'We will help you to make your dreams come true!'}/>
                    <div className={'wrapperBtn'}>
                        <BtnComponent btnClass={'button_ContactUs'} href={'#'} btnContent={'Contact us'} variant={''}/>
                        <div className={'social_network'}>
                            <a className={'link facebook'} href="#"/>
                            <a className={'link instagram'} href="#"/>
                            <a className={'link youtube'} href="#"/>
                        </div>
                    </div>
                </div>
            </div>
            <SliderComponent rightIcon={RightIcon} leftIcon={LeftIcon} fullscreenIcon={FullScreenIcon}
                             sliderBtnsClass={'headerSliderBtns'}
                             SliderClass={'headerSlider'}
                             wrapperSlidesClass={'headerWrapperSlides'}
                             step={1} length={3} counter={1} imageSlides={[
                {src: HeaderImg, imgClass:''},
                {src: AboutImg, imgClass:''},
                {src: OfferImg, imgClass:''}
            ]}/>

        </header>
    )
}

export default Header;
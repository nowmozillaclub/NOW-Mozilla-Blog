import React from 'react';
import { Slide, Slider, Caption } from 'react-materialize';
import BannerImg from '../images/Banner.jpeg';
import NOWImage from '../images/NOWImage.jpeg';


const Banner = () => {
    return (
        <Slider
            fullscreen={false}
            options={{
                duration: 500,
                height: 500,
                indicators: false,
                interval: 6000
            }}
            >
            <Slide image={<img alt="" src={BannerImg}/>}>
                <Caption placement="center">
                    <img src={ NOWImage } alt="NOW Image" className="responsive-img now-image" />
                    <h3 className="flow-text">
                        Network for the Open Web
                    </h3>
                    <p className="light grey-text text-lighten-3" style={{fontSize:"16px"}}>
                        A Mozilla Campus Club at MPSTME, Mumbai.
                    </p>
                </Caption>
            </Slide>
            
        </Slider>
    )
}

export default Banner

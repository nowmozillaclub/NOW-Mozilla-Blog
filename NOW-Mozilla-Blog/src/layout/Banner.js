import React from 'react';
import { Slide, Slider, Caption } from 'react-materialize';
import BannerImg from '../images/Banner.jpeg';
import NOWImage from '../images/NOWImage.jpeg';
import { Link } from 'react-router-dom'


const Banner = (props) => {
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
            <Slide image={<img alt="" src={BannerImg} />}>
                <Caption placement="center">
                    <Link to='/homepage' className="brand-logo"><img src={NOWImage} alt="NOW Image" className="responsive-img now-image" /></Link>
                    <h3 className="flow-text">
                        Network for the Open Web
                    </h3>
                    <p className="light grey-text text-lighten-3" style={{ fontSize: "16px" }}>
                        A Mozilla Campus Club at MPSTME, Mumbai.
                    </p>
                    <div style={{marginTop: '25px'}} className="customBtn">
                        <button style={{cursor: 'pointer'}} className="btnie white-text" onClick={() => {props.props.history.push('/homepage')}}>Read NOW</button>
                    </div>
                </Caption>
            </Slide>

        </Slider>
    )
}

export default Banner

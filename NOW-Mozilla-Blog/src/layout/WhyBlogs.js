import React from 'react';
import animatedCover from '../images/WhyBlogs.svg';

const WhyBlogs = () => {
    return (
        <div className="row why" id="whyEnrollar">
            <div id="roll" className="col s10 offset-s1 l6 offset-l3" style={{"borderRadius":'24px'}}>
            <div className="card" style={{"borderRadius":"24px"}}>
                <div id="crdImg" className="card-image"
                style={{"borderRadius":"24px 24px 0 0"}}
                >
                <img className="activator" src={ animatedCover } alt="cover"/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    Why Blogs?
                    <i className="material-icons right">more_vert</i></span>
                <p>Click to find out.</p>
                </div>
                <div className="card-reveal" style={{"backgroundColor":"#2a9d8f","color":"white"}}>
                <span className="card-title white-text text-darken-4">
                    Why Blogs?
                    <i className="material-icons right">close</i>
                </span>
                <p>
                    <a href="https://nowmozilla.club/"
                    style={{color:"yellow"}}
                    >A NOW Mozilla Club initiative...</a>
                </p>
                    <hr />
                <p>
                    We, at NOW Mozilla Club, feels that knowledge is always good when it is shared with others.
                    
                    <br/><br />
                    And following our Open-Source Moto, this explains it all.
                    <br /><br />
                    Therefore, <span>NOW Mozilla Club</span>
                    came up with an initiative of Blogs that helps our members learn and grow in the area of writing blogs
                    while at the same time sharing their knowledge and skills with the world!
                    <br /><br />
                    Let's get learning, shall we?
                </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WhyBlogs

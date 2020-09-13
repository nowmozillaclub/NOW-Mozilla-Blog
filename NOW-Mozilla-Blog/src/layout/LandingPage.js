import React from 'react'
import Footer from './Footer'
import Banner from './Banner'
import WhyBlogs from './WhyBlogs'


const LandingPage = () => {
    return (
        <div>
            <Banner />
            <WhyBlogs />
            <div>
                <div className="row">
                    <div className="col s10 offset-s1 " style={{ borderRadius: "24px" }}>
                        <div className="card-panel" style={{ borderRadius: "24px 24px 0 0", background: "#ffb022" }}>
                            <span className="white-text">
                                <h4>What's new?</h4>
                                <br />
                            Let's have a look...
                        </span>
                        </div>
                        <div className="container">
                            <div className="section">
                                <div className="card white z-depth-5">
                                    <div className="row">
                                        <div className="col s10 offset-s1 l7 articleContent">
                                            <h4>Article 1</h4>
                                            <p>
                                                Id in Lorem duis consequat ad magna minim do commodo cupidatat pariatur qui culpa. Officia Lorem consequat ullamco tempor tempor ad dolor excepteur qui labore. Proident nisi excepteur tempor do ut reprehenderit laborum ullamco dolore sunt duis. Ut officia eu id velit voluptate elit do cillum Lorem cupidatat voluptate nostrud reprehenderit anim. Reprehenderit fugiat reprehenderit mollit ad qui ipsum mollit nostrud anim velit exercitation sint.
                                        </p>
                                            <a className="blue-text" href="#">Read more</a>
                                        </div>
                                        <div className="col s12 l5 articleImage">
                                            <img className="responsive-img" src={require("../images/articleImg.jpeg")} />
                                            <p><img src={require("../images/pp.PNG")} class="circle responsive-img pp" /> By <a className="blue-text" href="#">Aimee Pearcy</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s10 offset-s1 " style={{ borderRadius: "24px" }}>
                        <div className="card-panel" style={{ borderRadius: "24px 24px 0 0", background: "#ffb022" }}>
                            <span className="white-text">
                                <h4>What's new?</h4>
                                <br />
                            Let's have a look...
                        </span>
                        </div>
                        <div className="section">
                            <div className="container infoCards">
                                <div className="grid-container">
                                    <div className="grid-item">
                                        <div className="row">
                                            <div className="col s12 m4">
                                                <div class="square"></div>
                                            </div>
                                            <div className="col s12 m8">
                                                <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="row">
                                            <div className="col s12 m4">
                                                <div class="square"></div>
                                            </div>
                                            <div className="col s12 m8">
                                                <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="row">
                                            <div className="col s12 m4">
                                                <div class="square"></div>
                                            </div>
                                            <div className="col s12 m8">
                                                <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="row">
                                            <div className="col s12 m4">
                                                <div class="square"></div>
                                            </div>
                                            <div className="col s12 m8">
                                                <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col s8 offset-s2 ">
                <h5 class="center-align subs valign-wrapper">Subscribe to our newsletter</h5>
                <div className="input-field s8 offset-s2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email'/>
                </div>
            </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage

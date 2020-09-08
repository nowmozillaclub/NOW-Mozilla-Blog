import React from 'react'


const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="card white z-depth-5">
                        <div className="row">
                            <div className="col s1 navBtn">
                                <a class="btn-floating btn-large waves-effect waves-light red articleNav"><i class="material-icons">arrow_back</i></a>
                            </div>
                            <div className="col s5 articleContent">
                                <h4>Article 1</h4>
                                <p>Id in Lorem duis consequat ad magna minim do commodo cupidatat pariatur qui culpa. Officia Lorem consequat ullamco tempor tempor ad dolor excepteur qui labore. Proident nisi excepteur tempor do ut reprehenderit laborum ullamco dolore sunt duis. Ut officia eu id velit voluptate elit do cillum Lorem cupidatat voluptate nostrud reprehenderit anim. Reprehenderit fugiat reprehenderit mollit ad qui ipsum mollit nostrud anim velit exercitation sint.</p>
                                <a className="blue-text" href="#">Read more</a>
                            </div>
                            <div className="col s5 articleImage">
                                <img className="responsive-img" src={require("../images/articleImg.jpeg")} />
                                <p><img src={require("../images/pp.PNG")} class="circle responsive-img pp" /> By <a className="blue-text" href="#">Aimee Pearcy</a></p>
                            </div>
                            <div className="col s1 navBtn">
                                <a class="btn-floating btn-large waves-effect waves-light red articleNav"><i class="material-icons">arrow_forward</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container infoCards">
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="row">
                                <div className="col s4">
                                    <div class="square"></div>
                                </div>
                                <div className="col s8">
                                    <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="row">
                                <div className="col s4">
                                    <div class="square"></div>
                                </div>
                                <div className="col s8">
                                    <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="row">
                                <div className="col s4">
                                    <div class="square"></div>
                                </div>
                                <div className="col s8">
                                    <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="row">
                                <div className="col s4">
                                    <div class="square"></div>
                                </div>
                                <div className="col s8">
                                    <p>Est officia culpa est dolor Lorem tempor irure cupidatat mollit. Duis duis anim minim nisi. Irure minim culpa proident id excepteur velit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="col s12 splash">
                    <h5 class="center-align subs">Subscribe to our newsletter</h5>
                    <div className="input-field nLetterInput">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'/>
                    </div>
                    <img src={require("../images/splash.jpeg")} class="responsive-img" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard

import React from 'react'
import { Link } from 'react-router-dom'
import Articles from './Articles'

const HomePage = () => {
    return (
        <div>
            <div className="row">
                <div className="col s3 sideNav">
                    <div className="section">
                        <img src={require("../images/now-square.png")} className="circle responsive-img sideNavPP" />
                        <h5>Sep 09, 2020</h5>
                        <p className="grey-text">08:43 am</p>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s2 sideNavIcons">

                                    </div>
                                    <div className="col s10 sideNavTabs">
                                        <Link to='/'><h5 className="black-text">Home</h5></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s2 sideNavIcons">

                                    </div>
                                    <div className="col s10 sideNavTabs">
                                        <h5>Blogs</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s2 sideNavIcons">

                                    </div>
                                    <div className="col s10 sideNavTabs">
                                        <a href="https://nowmozilla.club"><h5 className="black-text">About NOW</h5></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="row">
                                <div className="col s12 cardWrapper">
                                    <div className="card sideNavCard">
                                        <div className="card-content white-text">
                                            <span className="card-title">Card Title</span>
                                            <p></p>
                                        </div>
                                        <div className="card-action sideNavCard">
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col s9">
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="col s6">
                                    <h5>Good Morning, Pratit</h5>
                                </div>
                                <div className="col s6">
                                    <nav className="searchBar">
                                        <div className="nav-wrapper searchBar">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" type="search" required />
                                                    <label className="label-icon" for="search"><i className="material-icons black-text">search</i></label>
                                                    <i className="material-icons">close</i>
                                                </div>
                                            </form>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 section2">
                            <div className="row">
                                <div className="col s8">
                                    <Link to='/article' className="brand-logo"><Articles /></Link>
                                </div>
                                <div className="col s4">
                                    <div className="col s12 cardWrapper">
                                        <div className="card amber lighten-4 mainCards">
                                            <div className="card-content black-text">
                                                <span className="card-title">Card Title</span>
                                                <p>Lorem ipsum dolor sit amet, consectetu sdfbhb hsdbfhb ashjbdfj hbkasjhdbf  ajkshdbfjhhjsbdfhbh</p>
                                            </div>
                                        </div>
                                        <div className="card amber lighten-4 mainCards">
                                            <div className="card-content black-text">
                                                <span className="card-title">Card Title</span>
                                                <p>Lorem ipsum dolor sit amet, consectetu sdfbhb hsdbfhb ashjbdfj hbkasjhdbf  ajkshdbfjhhjsbdfhbh</p>
                                            </div>
                                        </div>
                                        <div className="card amber lighten-4 mainCards">
                                            <div className="card-content black-text">
                                                <span className="card-title">Card Title</span>
                                                <p>Lorem ipsum dolor sit amet, consectetu sdfbhb hsdbfhb ashjbdfj hbkasjhdbf  ajkshdbfjhhjsbdfhbh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

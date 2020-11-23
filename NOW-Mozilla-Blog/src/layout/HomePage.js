import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import { Loader } from '../components/Common'
import ScrollCard from '../Cards/ScrollCard'
import Card2 from '../Cards/Card2'
import { Skeleton } from '@material-ui/lab';

const GET_POSTS = gql`
{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }, orderBy: { direction: DESC, field: CREATED_AT }) {
      nodes {
        title
        body
        bodyHTML
        bodyText
        number
        labels(first: 100) {
          nodes {
            color
            name
            id
          }
        }
        author {
          url
          avatarUrl
          login
        }
        updatedAt
        id
      }
    }
  }
}
`

const HomePage = () => {

    const [posts, setPosts] = useState([]);
    const { loading, error, data } = useQuery(GET_POSTS);

    useEffect(() => {
        let tempAnother = document.createElement('script');
        tempAnother.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
        document.getElementById("github-embed").appendChild(tempAnother);
        window.$(document).ready(function(){
            window.$('.sidenav').sidenav();
          });
        if (!loading) {
            if (error) {
                console.error(error)
            }

            if (data) {
                setPosts(data?.repository?.issues?.nodes)
            }
        }
    }, [loading, error, data]);
    return (
        <>
            <div>
                <div className="row">
                    
                    <div className="col s12 m3 sideNav section hide-on-med-and-down" style={{position:"fixed"}}>
                        <div className="section">
                            <img src={require("../images/now-square.png")} className="circle responsive-img sideNavPP" />
                            <h5>{new Date().toDateString()}</h5>
                            <p className="grey-text">{new Date().toLocaleTimeString()}</p>
                        </div>
                        <div className="section">
                            <div className="row">
                                <div className="col s12 valign-wrapper" style={{margin:"10px 0"}}>
                                    <Link to='/' className="black-text valign-wrapper flow-text"><i className="material-icons navIcony">home</i><span>Home</span></Link>
                                </div>
                                <div className="col s12 valign-wrapper" style={{margin:"10px 0"}}>
                                    <Link to='/homepage' className="black-text valign-wrapper flow-text"><i className="material-icons navIcony">book</i><span>Blogs</span></Link>
                                </div>
                                <div className="col s12 valign-wrapper" style={{margin:"10px 0"}}>
                                    <Link to='/https://nowmozilla.club' className="black-text valign-wrapper flow-text"><i className="material-icons navIcony">info_outline</i><span>About NOW</span></Link>
                                </div>
                            </div>
                            <div className="section hide-on-med-and-down" id="github-embed">
                                {/* <div className="row">
                                    <div className="col s10 cardWrapper">
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
                                </div> */}
                                <div className="github-card" 
                                    style={{
                                        maxWidth:"100%",
                                        height:"auto"
                                    }}
                                    data-github="nowmozillaclub" data-height="auto" data-width="90%" data-theme="default">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m12 l9 offset-l3" style={{padding:"0"}}>
                        <nav className="show-on-medium-and-down col s12" id="mobiley" style={{display:"none", background: "#ffb94a"}}>
                            <div className="nav-wrapper">
                                <a href="#!" className="brand-logo left valign-wrapper" style={{height:"100%"}}><img src={require('../images/NOWImage.jpeg')} style={{height:"100%", padding: "5px"}} alt="NOW Blogs Logo"/></a>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                            </div>
                        </nav>

                        <ul className="sidenav" id="mobile-demo">
                            <li><Link to='/' className="black-text valign-wrapper flow-text"><span>Home</span></Link></li>
                            <li><Link to='/homepage' className="black-text valign-wrapper flow-text"><span>Blogs</span></Link></li>
                            <li><Link to='/https://nowmozilla.club' className="black-text valign-wrapper flow-text"><span>About NOW</span></Link></li>
                        </ul>
                        <div className="col s12" style={{paddingTop: "20px"}}>
                            <div className="col s12 center-align l5">
                                <h5>NOW Mozilla Blogs</h5>
                            </div>
                            <div className="col s10 offset-s1 m8 offset-m2 center-align l5" id="searchWrapper">
                                <nav className="searchBar">
                                    <div className="nav-wrapper searchBar">
                                        <form>
                                            <div className="input-field">
                                                <i className="material-icons prefix black-text" style={{top:0}}>search</i>
                                                <input id="search" type="text" style={{borderRadius: "24px", height:"100%"}} className="validate" />
                                                <label htmlFor="search" className="truncate" style={{height:"100%", top:"-10px"}}>Search for something</label>
                                            </div>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="col s12 section2">
                            {
                                posts.length !== 0 ? (
                                    posts.length < 3 ? <ScrollCard blog={posts} /> : <ScrollCard blog={posts.slice(0, 3)} /> ) : 
                                    <Skeleton variant="rect" animation="wave" width={750} height={400} style={{margin: "20px auto", borderRadius: "24px"}} />
                            }
                            {
                                loading || posts.length === 0
                                    ? [1,2,3,4,5].map(n=><Skeleton key={n} variant="rect" animation="wave" width={530} height={200} style={{margin: "20px auto"}} />)
                                    : posts.map((v, i) => {
                                        return <Card2 blog={v} key={i} />;
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage

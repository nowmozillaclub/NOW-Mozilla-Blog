import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Articles from './Articles'

import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import { Header } from "../components/Header";
import { Loader } from '../components/Common'
import { BlogContainer } from '../components/Blog'
import { Card } from '../components/Blog/Card'
import ScrollCard from '../Cards/ScrollCard'
import Card2 from '../Cards/Card2'

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
                                <Link to='/' className="black-text valign-wrapper flow-text"><i class="material-icons navIcony">home</i><span>Home</span></Link>
                            </div>
                            <div className="col s12 valign-wrapper" style={{margin:"10px 0"}}>
                                <Link to='/homepage' className="black-text valign-wrapper flow-text"><i class="material-icons navIcony">book</i><span>Blogs</span></Link>
                            </div>
                            <div className="col s12 valign-wrapper" style={{margin:"10px 0"}}>
                                <Link to='/https://nowmozilla.club' className="black-text valign-wrapper flow-text"><i class="material-icons navIcony">info_outline</i><span>About NOW</span></Link>
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
                <div className="col m12 l9 offset-l3">
                    <div className="row">
                        <div className="col s12">
                            <div className="row" style={{paddingTop: "20px"}}>
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
                                                    <label htmlFor="search" style={{height:"100%", top:"-10px"}}>Search for something</label>
                                                </div>
                                            </form>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 section2">
                            <div className="row">
                                <div className="col s12">
                                    {
                                        posts.length < 3 ? <ScrollCard blog={posts} /> : <ScrollCard blog={posts.slice(0, 3)} />
                                    }
                                    {
                                        loading
                                            ? <Loader />
                                            : posts.map((v, i) => {
                                                return <Card2 blog={v} key={i} />;
                                            })
                                    }
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

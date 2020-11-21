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
        if (!loading) {
            if (error) {
                console.error(error)
            }

            if (data) {
                setPosts(data?.repository?.issues?.nodes)
            }
        }
    }, [loading, error, data]);

    console.log("POSTS: ", posts)
    console.log("POSTS: ", posts.slice(0,3))

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
                                    <h5>NOW Mozilla Blogs</h5>
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
                                <div className="col s12">
                                    {
                                        posts.length < 3 ? <ScrollCard blog={posts}/> : <ScrollCard blog={posts.slice(0,3)}/>
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

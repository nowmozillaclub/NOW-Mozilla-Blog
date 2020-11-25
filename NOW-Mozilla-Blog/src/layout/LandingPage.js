import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Banner from './Banner'
import WhyBlogs from './WhyBlogs'
import Subscribe from '../images/Subscribe.svg';
import { TextInput } from 'react-materialize';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { config } from "../config";
import {AuthorAvatar} from "../components/Post/Author";

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


const LandingPage = (props) => {

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

    return (
        <div>
            <Banner props={props}/>
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
                        <div className="section">
                            <div className="container infoCards">
                                <div className="grid-container">
                                    {
                                        posts && posts.map((p, i) => {
                                            if(i >= 4) {
                                                return null
                                            }
                                            return (
                                                <div onClick={() => props.history.push(`/blog/${p.title}/${p.number}`)}key={i} className="grid-item">
                                                    <div className="row">
                                                        <div className="col s12 m4">
                                                        <AuthorAvatar style={{height: '80px', width: '80px'}} src={p.author.avatarUrl} alt={p.author.login} />
                                                        </div>
                                                        <div className="col s12 m8">
                                                            <h5>{p.title}</h5>
                                                            <p>{p.bodyText.slice(0, 100)}...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage

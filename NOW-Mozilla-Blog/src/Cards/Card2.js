import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './Card2.css'
import defaultImage from '../images/gradient.jpg'

const imgReg = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)user-images(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm


const Card2 = ({ blog }) => {

    const [labels, setLabels] = useState([]);
    const [array, setArray] = useState([]);
    const history = useHistory();

    const openBlog = (title, number) => {
        history.push(`/blog/${title}/${number}`);
    }

    useEffect(() => {
        const labels = blog.labels.nodes.filter((value) => {
            const str = blog.body
            console.log("Img reg: ", str.matchAll(imgReg))
            setArray([...str.matchAll(imgReg)]);

            return value.name !== "blog";
        });

        setLabels(labels);
    }, [blog.labels.nodes]);

    return (
        <div onClick={() => openBlog(blog.title, blog.number)}>
            <div className="container nowblogcontainer">
                <div className="card">
                    <i className="fas fa-arrow-right"></i>
                    <p>{blog.title}</p>
                    {
                        array.length === 0 ? <div className="pic" style={{ backgroundImage: `url(${defaultImage})` }}></div>
                        : <div className="pic" style={{ backgroundImage: `url(${array[0]})` }}></div>

                    }
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <button>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card2

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './Card2.css'

const Card2 = ({ blog }) => {

    const [labels, setLabels] = useState([]);
    const history = useHistory();

    const openBlog = (title, number) => {
        history.push(`/blog/${title}/${number}`);
    }

    useEffect(() => {
        const labels = blog.labels.nodes.filter((value) => {
            return value.name !== "blog";
        });

        setLabels(labels);
    }, [blog.labels.nodes]);

    return (
        <div onClick={() => openBlog(blog.title, blog.number)}>
            <div class="container">
                <div class="card">
                    <i class="fas fa-arrow-right"></i>
                    <p>{blog.title}</p>
                    <div class="pic"></div>
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

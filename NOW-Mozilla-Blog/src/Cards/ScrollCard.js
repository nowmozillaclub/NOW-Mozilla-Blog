import React, { useEffect } from 'react'
import './ScrollCard.css'
import Moment from 'moment';
import { Link } from 'react-router-dom'

export default function ScrollCard({ blog }) {
    useEffect(() => {
        var swiper = new window.Swiper('.blog-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            mousewheel: {
                invert: false,
            },
            // autoHeight: true,
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            }
        });
    })

    return (
        <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
                {
                    blog.map((v, i) => {
                        return (
                            <div className="blog-slider__item swiper-slide" key={i}>
                                <div className="blog-slider__img NOWBlog">
                                    {
                                        <img src={require("../images/now-circle.png")} alt="" />
                                    }
                                </div>
                                <div className="blog-slider__content">
                                    <span className="blog-slider__code">{Moment(v.updatedAt).fromNow()}</span>
                                    <div className="blog-slider__title">{v.title}</div>
                                    <div className="blog-slider__text">{v.bodyText.slice(0, 200)}...</div>
                                    <Link to={`/blog/${v.title}/${v.number}`} className="blog-slider__button">READ MORE</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="blog-slider__pagination"></div>
        </div>
    )
}

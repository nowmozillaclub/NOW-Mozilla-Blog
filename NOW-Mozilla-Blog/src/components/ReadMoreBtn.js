import React from 'react'

function ReadMoreBtn({handleClick}) {
    return (
        <div onClick={handleClick} style={{margin: '0 auto'}}>
            <div className="button">
                <div className="button__text black-text">Load more...</div>
                <div className="button__wrapper">
                    <div className="button__arrow"></div>
                    <div className="button__border-circle"></div>
                    <div className="button__mask-circle">
                        <div className="button__small-circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadMoreBtn

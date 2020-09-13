import React from 'react'
import CardImage from '../images/retro_computer.jpg'

const Articles = () => {
    return (
        <div className="col s12 cardWrapper">
            <div className="card amber lighten-4 mainCards">
                <div className="row">
                    <div className="card-content black-text">
                        <div className="col s8">
                            <span className="card-title">Card Title</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor egestas, sollicitudin lorem vitae, auctor risus. Donec facilisis nulla arcu, at ornare tellus</p>
                        </div>
                        <div className="col s4">
                            <div className="card-image">
                                <img src={CardImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles

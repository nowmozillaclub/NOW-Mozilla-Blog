import React from 'react'

const ArticleDetail = () => {
    return (
        <div>
            <div className="section articleHead">
                <h1>ARTICLE TITLE</h1>
                <p><img src={require("../images/pp.PNG")} class="circle responsive-img pp" /> By <a className="blue-text" href="#">Aimee Pearcy</a></p>
            </div>
            <div className="section">
                <div className="articleBack">
                    <div className="articleContent container">
                        <h6>Velit irure reprehenderit pariatur aliqua aliquip est dolor eu. Do adipisicing exercitation consectetur proident minim sunt commodo sunt mollit sit proident eiusmod. Esse adipisicing laborum deserunt duis eiusmod ut. Eu sit sunt ut ea proident incididunt quis nisi sunt officia ipsum ex. Eu mollit mollit anim mollit laboris. Deserunt deserunt officia ullamco adipisicing labore deserunt sint enim sint.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetail

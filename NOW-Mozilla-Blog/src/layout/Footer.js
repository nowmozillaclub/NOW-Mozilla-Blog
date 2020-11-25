import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer" style={{background:"#ffb022"}}>
            <div className="container">
                <div className="row" style={{width: '100%'}}>
                    <div className="col l6 s12">
                        <h5 className="white-text">NOW Mozilla Club</h5>
                        <p className="grey-text text-lighten-4">
                            We Teach Open Source. <br />
                            We Build Open Source. <br />
                            We are Open Source.
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Follow Us On</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="https://github.com/nowmozillaclub/">Github</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/nowmozillaclub/">Instagram</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://twitter.com/nowmozillaclub/">Twitter</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/nowmozillaclub/">Facebook</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://chat.whatsapp.com/EH4xPASr5aqG9HJvwqlnXz">Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                © 2020 Network for the Open Web, Mumbai.
                <a className="grey-text text-lighten-4 right" href="https://nowmozilla.club/">Our Website</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

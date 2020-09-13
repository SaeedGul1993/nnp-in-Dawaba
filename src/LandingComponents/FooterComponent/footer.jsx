import React from 'react';
import './footer.css';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import StickyFooter from 'react-sticky-footer';

const FooterPage = () => {
    return (
        <div className="main-footer">
            <div className="sub-container">
                <div className="feature-item">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                </div>
                <div className="feature-item">
                    <h4>Features</h4>
                    <ul>
                        <li className="list-item-footer">Home</li>
                        <li className="list-item-footer">Service</li>
                        <li className="list-item-footer">Contact</li>
                        <li className="list-item-footer">SignIn</li>
                    </ul>
                </div>
                <div className="feature-item">
                    <h4>Follow Us</h4>
                    <div className="social-container">
                        <Facebook />
                        <LinkedIn />
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className="underline"> </div>
            <p className="info">Copyright ©2020 All rights reserved | This template is made with  by <strong>Gul Developer.</strong></p>
        </div>
    )
}

export default FooterPage;
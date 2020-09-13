import React, { Fragment } from 'react';
import './landingpage.css';
import Header from '../HeaderComponent/header';
import CarouselPage from '../CarouselCmomponent/carousel';
import ServicesPage from '../ServicesComponent/services';
import ContactUsPage from '../ContactComponent/contact';
import FooterPage from '../FooterComponent/footer';

const LandingPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="carousel-page">
                <CarouselPage />
                <ServicesPage />
                <ContactUsPage />
                <FooterPage />
            </div>
        </Fragment>
    )
}

export default LandingPage;
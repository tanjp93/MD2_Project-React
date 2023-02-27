import React from 'react';
import BodyContent from './body/BodyContent';
import Footer from './footer/footer';
import HeaderToolbar from './header/HeaderToolbar';

const HomePage = () => {
    return (
        <div>
            <HeaderToolbar />
            <BodyContent />
            <Footer/>
        </div>
    );
}

export default HomePage;

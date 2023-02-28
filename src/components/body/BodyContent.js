import React from 'react';
import Commercial from './Commercial';
import Order from './Order';
import Options from './Options';
import Services from './Services';
import Footer from '../footer/footer';

const BodyContent = () => {
    return (
        <div className='bodyContents'>
            <Order />
            <Commercial />
            <Options />
            <Footer/>
        </div>
    );
}

export default BodyContent;

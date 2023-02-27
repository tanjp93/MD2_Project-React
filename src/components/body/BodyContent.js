import React from 'react';
import Commercial from './Commercial';
import Order from './Order';
import Options from './Options';
import Services from './Services';

const BodyContent = () => {
    return (
        <div className='bodyContents'>
            <Order/>
            <Commercial/>
            <Options/>
            <Services/>
        </div>
    );
}

export default BodyContent;

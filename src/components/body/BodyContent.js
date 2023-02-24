import React from 'react';
import Commercial from './Commercial';
import Order from './Order';
import Options from './Options';

const BodyContent = () => {
    return (
        <div className='bodyContents'>
            <Order/>
            <Commercial/>
            <Options/>
        </div>
    );
}

export default BodyContent;

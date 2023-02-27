import { Button, Space } from 'antd';
import React from 'react';
import img from '../../assets/img/logo.png'

const Services = () => {
    return (
        <div className='bodyServices'>
            <div className='bodyServices-title'>
                <div className='bodyServices-logo' >
                    <img  src={img} alt="" />
                    <p>Các thương hiệu khách sạn đối tác hàng đầu</p>
                </div>
                <div className='bodyServicesList'>
                    <Button >Khám Phá Ngay</Button>
                </div>
            </div>
            <div className='bodyServices-show'>
                <div className='bodyServices-show-bigSlide'>
                </div>
                <div className='bodyServices-show-slides'>
                    <div className='bodyServices-show-slide'>
                    </div>
                    <div className='bodyServices-show-slide'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

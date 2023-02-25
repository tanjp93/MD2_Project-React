import React from 'react';
import { Button } from 'antd';
import img from '../../assets/img/logo.png'

const HeaderToolbar = () => {
    return (
        <div className='header'>
            <div className='header-menu'>
                    <div className='header-menu_logo'>
                        <img className='header-menu_logoImg' src={img} alt="Error Logo" />
                    </div>
                <div className='header-menu_toolbar'>
                    <ul>
                        <li>Ưu đãi</li>
                        <li>Giới thiệu nhận quà</li>
                        <li>Hợp tác cùng chúng tôi</li>
                        <li>Khách hàng doanh nghiệp</li>
                        <li>Đơn Hàng</li>
                        <li>Top Thương Hiệu </li>
                        <li>
                            <select>
                                <option value="vnd">VND</option>
                                <option value="usd">USD</option>
                                <option value="jpn">JPN</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <div className='header-menu_tool login-registerForm'>
                    <Button type='primary'>Đăng Nhập</Button>
                    <Button >Đăng Ký</Button>
                </div>
            </div>
            <div className='header-opttion'>
                <ul>
                    <li>Khách Sạn</li>
                    <li>Vé Máy Bay</li>
                    <li>Tour & Sự Kiện</li>
                    <li>Nhà Hàng</li>
                    <li>Biệt Thự </li>
                    <li>Top Thương Hiệu </li>
                </ul>
            </div>
        </div>

    
    );
}

export default HeaderToolbar;

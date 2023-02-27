import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import img from '../../assets/img/logo.png'
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderToolbar = () => {
    const [userLogin, setUserLogin] = useState('')
    const userLoginState = useSelector(state => state.userReducer);
    const elementBtn = <>
        <Button type='primary' onClick={() => {
            navigate("/login")
        }}>Đăng Nhập</Button>
        <Button onClick={() => {
            navigate("/register")
        }}>Đăng Ký</Button>
    </>
    const elementShowUser = <div className='formShowEmailLogin' >
        <div className='showEmailLogin'>{userLoginState.email}</div>
        <Button type='primary'>Logout</Button>
    </div>
    useEffect(() => {
        userLoginState.email == '' ? setUserLogin(elementBtn) : setUserLogin(elementShowUser)
    }, [userLoginState])
    //    console.log(userLoginState.payload.user.email);
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className='header-menu'>
                <div className='header-menu_logo'>
                    <Link to='/'>
                        <img className='header-menu_logoImg' src={img} alt="Error Logo" />
                    </Link>
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
                    {userLogin}
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

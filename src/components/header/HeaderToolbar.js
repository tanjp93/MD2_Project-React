import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import img from '../../assets/img/logo.png'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { act_current_unit_state, act_set_items, act_logout_state } from '../../redux/actions';

const HeaderToolbar = () => {
    const dispatch = useDispatch()
    const [currencyUnit, setCurrentUnit] = useState('vnd')
    useEffect(() => {
        dispatch(act_current_unit_state(currencyUnit))
    }, [currencyUnit])
    // console.log(currencyUnit);
    const [userLogin, setUserLogin] = useState('')
    const userLoginState = useSelector(state => state.userReducer);
    // console.log(userLogin);

    const handleLogout = () => {
        dispatch(act_logout_state())
    }
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
        <Button type='primary' onClick={handleLogout}>Logout</Button>
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
                            <select className='header-menu_toolbarSelect'  onChange={(e) => setCurrentUnit(e.target.value)}>
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
                    <li >Khách Sạn</li>
                    <li >Vé Máy Bay</li>
                    <li
                     onClick={()=>{
                        navigate('/product')
                        dispatch(act_set_items([]))
                    }}
                        >
                            Tour & Sự Kiện
                        </li>
                    <li>Nhà Hàng</li>
                    <li>Biệt Thự </li>
                    <li>Quản Lý  </li>
                </ul>
            </div>
        </div>


    );
}

export default HeaderToolbar;

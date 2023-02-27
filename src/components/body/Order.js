import React from 'react';
import { Button, Calendar ,theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
const Order = () => {
    const [userLogin, setUserLogin] = useState('')
    const userLoginState = useSelector(state => state.userReducer);
    useEffect(() => {
        userLoginState.email == '' ? setUserLogin(elementBtn) : setUserLogin('')
    }, [userLoginState])
    const elementBtn = <div className='oder-content'>
        <p className='oder-content-notice'>Đăng nhập để nhận thêm ưu đãi 15% khi đặt phòng khách sạn, vé máy bay</p>
        <div className='login-registerForm'>
            <Button onClick={() => navigate("/login")} type='primary'>Đăng Nhập</Button>
            <Button onClick={() => navigate("/register")}>Đăng Ký</Button>
        </div>
    </div>


    const navigate = useNavigate()
    return (
        <div className='body-oder'>
            <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fkusatsu_KV.jpg?alt=media&token=15c9fc5c-b859-4ba9-bc9e-df0b355a6ed0" alt="" />
            {userLogin}
            <div className='bodyOder-search'>
                <div className='bodyOder-search_title'>
                    <div className='bodyOder-search_title_item'>Khách Sạn</div>
                    <div className='bodyOder-search_title_item'>Vé Máy Bay</div>
                    <div className='bodyOder-search_title_item'>Biệt Thự</div>
                </div>
                <div className='bodyOder-search_Oders'>
                    <div className='bodyOder-search_Oders_place'>  </div>
                    <div className='bodyOder-search_Oders_dayTogo'>
                        <div style={wrapperStyle}>
                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;

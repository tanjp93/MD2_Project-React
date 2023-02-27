import React from 'react';
import { Button, Calendar, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DatePicker, Space } from 'antd';



const { RangePicker } = DatePicker;


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
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    return (
        <div className='body-oder'>
            <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fkusatsu_KV.jpg?alt=media&token=15c9fc5c-b859-4ba9-bc9e-df0b355a6ed0" alt="" />
        
            <div className='bodyOder-search-container'>
                <div className='bodyOder-search'>
                    <div className='bodyOder-search_title'>
                        <div className='bodyOder-search_title_item'>Khách Sạn</div>
                        <div className='bodyOder-search_title_item'>Vé Máy Bay</div>
                        <div className='bodyOder-search_title_item'>Biệt Thự</div>
                    </div>
                    <div className='bodyOder-search_container'>
                           <div className='bodyOder-search_Oders'>
                        <div className='bodyOder-search_Oders_place'>
                            <p>Điểm đến</p>
                            <input type="text" placeholder=' Nhập địa điểm đến ......' /> </div>
                        <div className='bodyOder-search_Oders_dayGo'>
                            <p>Chọn Ngày Đi</p>
                            <Space direction="vertical" size={12}>
                                <RangePicker />
                            </Space >
                        </div>
                        <div className='bodyOder-search_Oders_people'>
                            <label>Chọn Số Người</label>
                            <select className='bodyOder-search_Oders_numPp' >
                                <option value="" key="">Nhập số người</option>
                                <option value="1" key="">1 người lớn</option>
                                <option value="2" key="">2 người lớn</option>
                                <option value="3" key="">3 người lớn</option>
                                <option value="2.5" key="">2 người lớn & 1 trẻ em</option>
                                <option value="3.5" key="">3 người lớn & 1 trẻ em</option>
                                <option value="4" key="">3 người lớn & 2 trẻ em</option>
                            </select>
                        </div>

                        <div className='bodyOder-search_btn'></div>
                    </div>
                    </div>
                 
                </div>

            </div>
            {userLogin}
        </div>
    );
}

export default Order;

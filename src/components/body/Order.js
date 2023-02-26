import React from 'react';
import { Button } from 'antd';

const Order = () => {
    return (
        <div className='body-oder'>
            <img src="https://firebasestorage.googleapis.com/v0/b/md2-reactjs.appspot.com/o/images%2Fkusatsu_KV.jpg?alt=media&token=15c9fc5c-b859-4ba9-bc9e-df0b355a6ed0" alt="" />
            <div className='oder-content'>
                <p className='oder-content-notice'>Đăng nhập để nhận thêm ưu đãi 15% khi đặt phòng khách sạn, vé máy bay</p>
                <div className='login-registerForm'>
                    <Button type='primary'>Đăng Nhập</Button>
                    <Button >Đăng Ký</Button>
                </div>
            </div>
        </div>
    );
}

export default Order;
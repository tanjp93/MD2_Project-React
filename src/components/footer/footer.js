import React from 'react';
import imgLogo from '../../assets/img/logo.png'
import logoBCT_1 from '../../assets/img/logoSaleNoti.png'
import logoBCT_2 from '../../assets/img/logo-congthuong-w165.png'
const Footer = () => {
    return (
        <div className='Footer'>
            <hr />
            <div className='Footer-logo'>
                <img src={imgLogo} alt="" />
            </div>
            <div className='Footer-contents'>
                <div className='Footer-content'>
                    <div className='Footer-content-Title'>
                        <p>Travel With You -La IsLa</p>
                    </div>
                    <div className='Footer-content-policy'>
                        <p>Tổng đài chăm sóc : 19002080</p>
                        <p>Email : honcahailong@gmail.com</p>
                        <p>Văn phòng Hà Nội: Mỹ Đình - Hà Đông</p>
                        <p>Văn phòng tp HCM: Đường Paster - Quận 3 - HCM</p>
                    </div>
                    <div className='Footer-Img'>
                        <img src={logoBCT_1} alt="" />
                        <img src={logoBCT_2} alt="" />
                    </div>
                </div>
                <div className='Footer-content'>
                    <div className='Footer-content-Title'>
                        <p>Chính sách và quy định</p>
                    </div>
                    <div className='Footer-content-policy'>
                    <p>Điều khoản và điều kiện</p>
                        <p>Quy định về thanh toán</p>
                        <p>Quy định về xác nhận thông tin đặt phòng</p>
                        <p>Chính sách về hủy đặt phòng và hoàn trả tiền</p>
                        <p>Chính sách bảo mật thông tin</p>
                        <p>Quy chế hoạt động</p>
                        <p>Quy trình giải quyết tranh chấp, khiếu nại</p>
                        <p>Điều lệ bay quốc nội</p>
                    </div>
                </div>
                <div className='Footer-content'>
                    <div className='Footer-content-Title'>
                        <p>Khách hàng và đối tác</p>
                    </div>
                    <div className='Footer-content-policy'>
                        <p>Điều khoản và điều kiện</p>
                        <p>Quy định về thanh toán</p>
                        <p>Quy định về xác nhận thông tin đặt phòng</p>
                        <p>Chính sách về hủy đặt phòng và hoàn trả tiền</p>
                        <p>Chính sách bảo mật thông tin</p>
                        <p>Quy chế hoạt động</p>
                        <p>Quy trình giải quyết tranh chấp, khiếu nại</p>
                        <p>Điều lệ bay quốc nội</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Footer;

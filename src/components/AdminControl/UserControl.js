import React from 'react';
import Footer from '../footer/footer';
import HeaderToolbar from '../header/HeaderToolbar';
import logobgd from '../../assets/img/logo.png'
import logobgd2 from '../../assets/img/img.png'
const UserControl = () => {
    return (
        <div>
            <HeaderToolbar />
            <div className='userControl-container'>
                <div className='userControl-container-tb'>
                    <table className='userControl-tb'>
                        <caption> User List</caption>
                        <thead>
                            <tr className='userControl-tb-title'>
                                <th>STT</th>
                                <th>UserName</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Order Status</th >
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='userControl-tb-body'>
                                <td>STT</td>
                                <td>UserName</td>
                                <td>Phone Number</td>
                                <td>Email</td>
                                <td>Order Status</td >
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='userControl-bgd1'>
                    <img src={logobgd} alt="" />
                </div>
                {/* <div className='userControl-bgd2'>
                    <img src={logobgd2} alt="" />
                </div> */}
            </div>
            <Footer />
        </div>
    );
}

export default UserControl;

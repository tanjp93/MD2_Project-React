import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import HeaderToolbar from '../header/HeaderToolbar';
import logobgd from '../../assets/img/logo.png'
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_get_list_user } from '../../redux/actions';
import ShowListUser from './ShowListUser';

const Controls = () => {

    const userLoginState = useSelector(state => state.userLogin);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(act_get_list_user())
    },[]) 
  
    // useEffect(() => {
    //     if (userLoginState && userLoginState.user.permission == 1) {
    //         return;
    //     } else {
    //         navigate("/")
    //     }
    // }, [userLoginState]);


    return (
        <div>
            <HeaderToolbar />
            <div className='btn-toggle'>
                <Space className="site-button-ghost-wrapper" wrap>
                    <Button type="primary" icon={<PoweroffOutlined />} >Quản lý Users</Button>
                    <Button type="primary" danger ghost>
                        Quản lý Sản Phẩm
                    </Button>
                </Space>
            </div>

            <div className='userControl-container'>
                <div className='userControl-container-tb'>
                    <table className='userControl-tb'>
                        <caption> User List</caption>
                        <thead>
                            <tr className='userControl-tb-title'>
                                <th>STT</th>
                                <th>Email</th>
                                <th>Full Name</th>
                                <th>Status</th >
                                <th> Administered</th>
                                <th> Edit </th >
                            </tr>
                        </thead>
                        <tbody>
                            <ShowListUser/>
                        </tbody>
                    </table>
                </div>

                <div className='userControl-bgd1'>
                    <img src={logobgd} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Controls;

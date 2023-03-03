import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import HeaderToolbar from '../header/HeaderToolbar';
import logobgd from '../../assets/img/logo.png'
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_get_list_user } from '../../redux/actions';
import ShowListUser from './ShowListUser';
import Items from './Items';
import { Link } from 'react-router-dom';

const Controls = () => {

    const userLoginState = useSelector(state => state.userLogin);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(act_get_list_user())
    }, [])

    useEffect(() => {
        if (userLoginState && userLoginState.user.permission == 1) {
            return;
        } else {
            navigate("/")
        }
    }, [userLoginState]);

    const [controlUser, setControlUser] = useState(true)

    return (
        <div>
            <HeaderToolbar />

            <div className='btn-toggle'>
                <Space className="site-button-ghost-wrapper" wrap>
                    <Button type="primary" icon={<PoweroffOutlined />} onClick={() => setControlUser(true)} >Quản lý Users</Button>
                    <Button type="primary" onClick={() => setControlUser(false)} danger ghost>
                        Quản lý Sản Phẩm
                    </Button>
                </Space>
            </div>

            {controlUser && <div className='userControl-container'>
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
                            <ShowListUser />
                        </tbody>
                    </table>
                </div>

                <div className='userControl-bgd1'>
                    <img src={logobgd} alt="" />
                </div>
            </div>}

            {!controlUser && <div className='listProducts-container'>
                <div className='listProduct-show'>
                    <h3> Danh sách sản phẩm</h3>
                    <p> <Button type="primary" >
                        <Link to={'/controls/addItems'}>Thêm Sản Phẩn</Link>
                    </Button>
                    </p>
                    <table >
                        <thead>
                            <tr>
                                <th >STT</th>
                                <th >Title</th>
                                <th >From</th>
                                <th >Price</th>
                                <th >Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Items />
                        </tbody>
                    </table>
                    <img className='listProduct-container-img' src={logobgd} alt="" />
                </div>

            </div >}


            <Footer />
        </div>
    );
}

export default Controls;

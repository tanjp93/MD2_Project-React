import { Button } from 'antd';
import React, { useState,useEffect } from 'react';
import Footer from '../footer/footer';
import HeaderToolbar from '../header/HeaderToolbar';
import logoBgd from '../../assets/img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { act_update_user } from '../../redux/actions';
import { act } from 'react-dom/test-utils';

const EditUser = () => {
    const preEditUser=useSelector(state=>state.preEditUser)
     useEffect(()=>{
        preEditUser && setEditUser({...preEditUser, repassword: ""})
     },[preEditUser])
    ///khoi tao bien///
    const [notification, setNotification] = useState("")
    const [editUser, setEditUser] = useState({
        id: "",
        email: "",
        password: "",
        repassword: '',
        fullname: '',
        phone: '',
        state: 1
    })
    console.log(editUser);
    const dispatch=useDispatch()
///function///
const handleInput = (e) => {
    let key = e.target.name;
    setEditUser({ ...editUser, [key]: e.target.value })
};
const handleSubmitEdit = () => {
    dispatch(act_update_user(editUser))
    // dispatch(act_search_user(editUser))
};


    return (
        <div className='containerEdit'>
            <HeaderToolbar />
            <div className='editForm' style={{background:`url("${logoBgd}")`}} >
    
                <div  className='editFormContents'>
                    <div className='contentChild'>
                        <div className='editFormContents_title'><h3>Update User </h3></div>
                        <div className='editFormContent'>
                            <span className='editFormContent_title'>Email :</span>
                            <input className='editFormContent_input'
                                email=''
                                id="email"
                                name="email"
                                value={editUser.email}
                                onChange={handleInput}
                                // placeholder=' Nhập Email ....'
                            />
                        </div>
                        <div className='editFormContent'>
                            <span className='editFormContent_title'>Mật Khẩu :</span>
                            <input className='editFormContent_input'
                                email=''
                                onChange={handleInput}
                                name='password'
                                value={editUser.password}
                                type='password'
                                placeholder=' Nhập Mật Khẩu ....' />
                        </div>
                        <div className='editFormContent'>
                            <span className='editFormContent_title'>Xác Nhận Mật Khẩu :</span>
                            <input className='editFormContent_input'
                                onChange={handleInput}
                                name='repassword'
                                type='password'
                                value={editUser.repassword}
                                placeholder=' Vui Lòng Nhập Lại Mật Khẩu ....' />
                        </div>
                        <div className='editFormContent'>
                            <span className='loginInput-titile'>Nhập đầy đủ họ tên :</span>
                            <input className='editFormContent_input'
                                onChange={handleInput}
                                name='fullname'
                                type='text'
                                value={editUser.fullname}
                                placeholder=' Vui Lòng Nhập Lại Mật Khẩu ....' />
                        </div>
                        <div className='editFormContent'>
                            <span  className='loginInput-titile'>Nhập số điện thoại:</span>
                            <input className='editFormContent_input'
                                onChange={handleInput}
                                value={editUser.phone}
                                name='phone'
                                type='text'
                                placeholder=' Vui Lòng Nhập số điện thoại ....' />
                        </div>
                        {/* <span className='editFormContentNotify'>notification</span> */}
                        {/* {notification} */}
                        <div className='editFormContentBtn'>
                            <Button type="primary" htmlType="submit"
                            onClick={handleSubmitEdit}
                            > Update</Button>
                        </div>
                    </div>
                </div>
               
            </div>
            <Footer />
        </div>
    );
}

export default EditUser;

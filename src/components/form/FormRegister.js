import { Button, Checkbox } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';


const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState("")
    const navigate=useNavigate()

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email không đúng định dạng !');
        } else {
            setError(null);
        }
        setEmail(event.target.value);
        handleInput(event)
    };
    const [policy, setPolicy] = useState(true);
    const elementNotice = <span className='formNotice'> Vui lòng kiểm tra lại thông tin !!</span>
    const [userRegister, setUserRegister] = useState({
        id: "",
        email: "",
        password: "",
        repassword: ''
    })

    const handleInput = (e) => {
        let key = e.target.name;
        setUserRegister({ ...userRegister, [key]: e.target.value })
    };
    const dispash = useDispatch()

    const handleSubmit = () => {
        const { email, password, repassword } = userRegister;
        if (email && password && repassword && password == repassword && policy && !error) {
            dispash(actions.act_post_user({ email, password }))
             setNotification("");
             navigate('/login')

        } else {
            setNotification(elementNotice)
        }
    }

    const handleCheckbox = () => {
        setPolicy(!policy)
    }

    return (

        <div className='form'>
            <div className='formLoginContainer'>
                <div className='loginTitile'><h3>Đăng Ký</h3></div>
                <div className='loginInput'>
                    <span className='loginInput-titile'>Email :</span>
                    <input email=''
                        id="email"
                        name="email"
                        value={userRegister.email}
                        onChange={handleChange}
                        placeholder=' Nhập Email ....'
                    />
                </div>
                <div className='emailErr'>
                    {error && <h2 style={{ color: 'red' }}>{error}</h2>}
                </div>
                <div className='loginInput'>
                    <span className='loginInput-titile'>Mật Khẩu :</span>
                    <input email=''
                        onChange={handleInput}
                        name='password'
                        value={userRegister.password}
                        type='password'
                        placeholder=' Nhập Mật Khẩu ....' />
                </div>
                <div className='loginInput'>
                    <span className='loginInput-titile'>Xác Nhận Mật Khẩu :</span>
                    <input
                        onChange={handleInput}
                        name='repassword'
                        type='password'
                        value={userRegister.repassword}
                        placeholder=' Vui Lòng Nhập Lại Mật Khẩu ....' />
                </div>


                <div className='loginInput'>
                    <Checkbox style={{ margin: "0px 200px 5px", width: '100%' }} checked={policy} onChange={handleCheckbox} > Đồng ý với điều khoản của Công ty</Checkbox>
                </div>
                {notification}
                <div className='formLoginSubmit'>
                    <Button type="primary" htmlType="submit" onClick={handleSubmit}> Đăng Ký</Button>
                </div>
                <div className='formBackToHome'>
                    <Link to='/'>Về trang chủ</Link> /
                    <Link to='/login'>Đăng Nhập</Link>
                </div >
            </div>
        </div>
    );
}

export default FormLogin;

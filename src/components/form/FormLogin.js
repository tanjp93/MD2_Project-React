import { useState, useEffect } from 'react';
import { Button, Checkbox } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { act_login_user, act_search_user } from '../../redux/actions';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email không đúng định dạng');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
    handleInnput(event)
  };

  const [notification, setNotification] = useState("")
  const elementNotice = <span className='formNotice'> Vui lòng kiểm tra lại thông tin !</span>
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  })
  const dispash = useDispatch()
  const handleInnput = (e) => {
    let key = e.target.name;
    setUserLogin({ ...userLogin, [key]: e.target.value })
  }

  const userLoginState = useSelector(state => state.getLoginUser);

  console.log("userLoginState =>>> ", userLoginState.email);
  const handleLogin = () => {
    dispash(act_login_user(userLogin))
    if (userLoginState) {
      console.log(userLoginState);
       navigate('/') 
       setNotification('')
      }
      else {setNotification(elementNotice)}
  }
  return (
    <div className='form'>
      <div className='formLoginContainer'>
        <div className='loginTitile'><h3>Đăng Nhập</h3></div>
        <div className='loginInput'>
          <span className='loginInput-titile'>Email :</span>
          <input email=''
            id="email"
            name="email"
            value={userLogin.email}
            onChange={handleChange}
            placeholder=' Nhập Email ....' />
        </div>
        <div className='emailErr'>
          {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        </div>
        <div className='loginInput'>
          <span className='loginInput-titile'>Mật Khẩu :</span>
          <input
            onChange={handleInnput}
            type='password'
            value={userLogin.password}
            name="password"
            placeholder=' Nhập Mật Khẩu ....' /> 
        </div>
        {/* <span className='formNotice'>Vui lòng nhập đúng thông tin!</span> */}
        <Checkbox className='loginInput_checkbox'>Remember me <div>{notification}</div></Checkbox>
        <div className='formLoginSubmit'>
          <Button type="primary" htmlType="submit" onClick={handleLogin}> Đăng Nhập</Button>
        </div>
        <div className='formBackToHome'>
          <Link to='/'>Về trang chủ</Link> /
          <Link to='/register'>Đăng kí</Link>
        </div >
      </div>
    </div>
  );
}

export default FormLogin;

import { useState } from 'react';
import { Button, Checkbox } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };
  return (
    <div className='form'>
      <div className='formLoginContainer'>
        <div className='loginTitile'><h3>Đăng Nhập</h3></div>
        <div className='loginInput'>
          <span className='loginInput-titile'>Email :</span>
          <input email=''
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder=' Nhập Email ....' />
        </div>
        <div className='emailErr'>
          {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        </div>
        <div className='loginInput'>
          <span className='loginInput-titile'>Mật Khẩu :</span>
          <input
            type='password'
            placeholder=' Nhập Mật Khẩu ....' />
        </div>
        <span className='formNotice'>Vui lòng nhập đúng thông tin!</span>
        <Checkbox className='loginInput_checkbox'>Remember me</Checkbox>
        <div className='formLoginSubmit'>
          <Button type="primary" htmlType="submit" > Đăng Nhập</Button>
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

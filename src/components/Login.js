import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginApi } from '../utilities/API/LoginApi';
import { isPhoneValidation } from '../utilities/common/helpers';
import { isValidPassword } from '../utilities/common/helpers';
import swal from 'sweetalert';

function Login({ setToken }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errPhoneMessage, setErrPhoneMessage] = useState('');
  const [errPasswordMessage, setErrPasswordMessage] = useState('');
  const [redirectate, setRedirectate] = useState(false);

  console.log(password);

  const clickLogin = () => {
    if (phone !== '' && password !== '') {
      if (errPhoneMessage === '' && errPasswordMessage === '') {
        LoginApi({
          email: 'user@user.com',
          password: 12345678,
        }).then((result) => {
          if (result) {
            let { user, token } = result;
            console.log(result);
            localStorage.setItem('token', JSON.stringify(token));
            swal('Good job!', 'You Are Logged In!', 'success');
            setToken('token');
            setRedirectate(true);
          } else {
            swal('ERROR!', 'Check Your Internet Connection!', 'error');
          }
        });
      }
    } else {
      alert('complete the fields');
    }
  };

  const handlePhoneChanges = (e) => {
    setPhone(e.target.value);
    const result = isPhoneValidation(e.target.value);
    if (e.target.value === '' || result.isValid) {
      setErrPhoneMessage('');
    } else {
      setErrPhoneMessage(result.errMsg);
    }
  };

  const handlePasswordChanges = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    const result = isValidPassword(e.target.value);
    if (e.target.value === '' || result.isValid) {
      setErrPasswordMessage('');
    } else {
      setErrPasswordMessage(result.errMsg);
      console.log(errPasswordMessage);
    }
  };

  if (redirectate) {
    return <Redirect to={'/'} />;
  }

  return (
    <React.Fragment>
      <h1
        style={{
          marginBottom: '5%',
          marginTop: '4%',
          backgroundColor: '#0bb17f',
          padding: '5px',
          borderRadius: '25px',
          width: '27%',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <strong>Login</strong>
      </h1>
      <div
        style={{
          backgroundColor: '#0bb17f',
          borderRadius: '25px',
          padding: '100px',
        }}
        className='w-75 m-auto'
      >
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            <strong style={{ color: 'white' }}>Phone Number</strong>
          </label>
          <input
            type='tel'
            value={phone}
            name='phone'
            className='form-control'
            id='exampleInputEmail1'
            onChange={handlePhoneChanges}
          />
          <span className='badge bg-warning text-dark w-75 p-1'>
            {errPhoneMessage}
          </span>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            <strong style={{ color: 'white' }}>Password</strong>
          </label>
          <input
            value={password}
            type='password'
            name='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={handlePasswordChanges}
          />
          <span className='badge bg-warning text-dark w-75 p-1'>
            {errPasswordMessage}
          </span>
        </div>
      </div>
      <button
        type='submit'
        onClick={clickLogin}
        style={{
          marginBottom: '4%',
          marginTop: '2%',
          marginRight: '15%',
          backgroundColor: '#0bb17f',
          padding: '10px',
          borderRadius: '25px',
          width: '15%',
          textAlign: 'center',
          color: '#fff',
        }}
        className='float-right'
      >
        <strong>Submit</strong>
      </button>
    </React.Fragment>
  );
}

export default Login;

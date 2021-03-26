import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { LoginApi } from '../utilities/LoginApi';
import HomePage from './HomePage';

function Login() {
  const [login, setLogin] = useState({});
  const [redirectate, setRedirectate] = useState(false);
  let history = useHistory();

  const clickLogin = () => {
    if (login) {
      LoginApi(login).then((result) => {
        let res = result;
        if (res.user) {
          console.log(res);
          sessionStorage.setItem('user', res);
          setRedirectate(true);
          alert(`WELCOME BACK : ${res.user.name}`);
        } else {
          alert('YOU CAN NOT LOG IN :)');
        }
      });
    }
  };

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  if (redirectate) {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={HomePage} />;
          <Redirect to={'/home'} />
        </Switch>
      </Router>
    );
  }

  return (
    <React.Fragment>
      <h1 className='mt-5 mb-5 text-center'>Login </h1>
      <div
        style={{
          backgroundColor: '#20c997',
          borderRadius: '25px',
          padding: '100px',
        }}
        className='w-75 m-auto'
      >
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            <strong style={{ color: 'white' }}>Email address</strong>
          </label>
          <input
            type='text'
            name='email'
            className='form-control'
            id='exampleInputEmail1'
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            <strong style={{ color: 'white' }}>Password</strong>
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={onChange}
          />
        </div>
        <button
          type='submit'
          style={{ backgroundColor: '#343a40', color: 'white' }}
          className='btn px-5 mt-3'
          onClick={clickLogin}
        >
          <strong>Submit</strong>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Login;

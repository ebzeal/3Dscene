import React from 'react';

import { LoginPage, LogingPageRight } from './Login.styles';
import LoginOcean from '../../Components/LoginOcean/LoginOcean';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {
  return (
    <LoginPage>
      <LoginOcean />
      <LogingPageRight>
        <LoginForm />
      </LogingPageRight>
    </LoginPage>
  );
};

export default Login;

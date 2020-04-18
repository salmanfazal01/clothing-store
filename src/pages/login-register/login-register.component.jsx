import React from 'react';

import './login-register.styles.scss';
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';

const LoginRegisterPage = () => (
    <div className="login-register">
        <Login/>
        <Register/>
    </div>
);

export default LoginRegisterPage;
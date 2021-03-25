import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import Logo from '../../assets/logo-orange.png';

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-blue-500 h-screen w-screen">
      <div className="max-w-sm px-1">
        <figure className="mb-8">
          <img src={Logo} alt="My franchise" />
        </figure>
        <form className="flex flex-col items-center">
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" />
          <Button label="LOG IN" />

          <span className="text-white my-4">
            {"Don't have an account? "}
            <Link className="duration-200 hover:opacity-60" to="/register">
              <strong>SIGN UP</strong>
            </Link>
          </span>

          <span className="text-white">
            {'Forgot your password? '}
            <Link
              className="duration-200 hover:opacity-60"
              to="/forgot-password"
            >
              <strong>CLICK HERE</strong>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;

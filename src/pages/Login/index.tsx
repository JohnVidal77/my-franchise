import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import Logo from '../../assets/logo-orange.png';

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-blue-500 h-screen w-screen">
      <div className="max-w-sm">
        <figure className="mb-8">
          <img src={Logo} alt="My franchise" />
        </figure>
        <form action="" className="flex flex-col items-center">
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" />
          <Button label="log In" />
          <span className="text-white mb-2">
            {"Don't have an account? "}
            <a className="hover:opacity-60" href="_">
              <strong>SIGN UP</strong>
            </a>
          </span>

          <span className="text-white mb-2">
            {'Forgot your password? '}
            <a href="_">
              <strong>CLICK HERE</strong>
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;

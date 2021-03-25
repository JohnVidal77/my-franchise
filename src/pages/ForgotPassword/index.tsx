import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo-orange.png';

const Register: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center bg-blue-500 h-screen w-screen">
      <Link to="/" className="absolute top-8 left-8 text-white">
        Back
      </Link>
      <div className="max-w-sm  px-1">
        <figure className="mb-8">
          <img src={Logo} alt="My franchise" />
        </figure>
        <form className="flex flex-col items-center">
          <span className="text-center mb-4 text-white">
            Enter your email to be able to recover your password
          </span>
          <Input name="email" placeholder="Email" />
          <Button label="RECEIVE INSTRUCTIONS" />
        </form>
      </div>
    </div>
  );
};

export default Register;

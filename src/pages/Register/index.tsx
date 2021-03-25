import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo-orange.png';

const Register: React.FC = () => {
  return (
    <div className="relative justify-center items-center bg-blue-500 min-h-screen h-full w-screen">
      <nav className="flex top-0 left-0 right-0 justify-center p-4 mb-4">
        <Link className="absolute top-4 left-4 text-white" to="/">
          Back
        </Link>
        <figure className="mb-8 w-48">
          <img src={Logo} alt="My franchise" />
        </figure>
      </nav>
      <div className="max-w-sm md:max-w-2xl mx-auto px-1">
        <div className="text-center text-white mb-6">
          <h1 className="text-2xl font-semibold">Welcome!</h1>
          <span>
            We want to get to know you better! Start filling out all the entries
            below.
          </span>
        </div>
        <form className="flex flex-wrap flex-col md:flex-row text-white">
          <fieldset className="md:w-1/2 md:px-2 mb-4">
            <legend className="mb-2 border-b font-semibold border-white w-full">
              Company info
            </legend>
            <Input name="companyName" placeholder="Company Name" />
            <Input name="document" placeholder="Document" />
          </fieldset>
          <fieldset className="md:w-1/2 md:px-2 mb-4">
            <legend className="mb-2 border-b font-semibold border-white w-full">
              User info
            </legend>
            <Input name="name" placeholder="Name" />
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Password" />
          </fieldset>
          <div className="w-full mb-4 text-center">
            <Button label="REGISTER" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

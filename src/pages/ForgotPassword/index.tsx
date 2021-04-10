import React, { useCallback, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { ToastSuccess, ToastWarning } from '../../services/ShowToaster';
import IsValidEmail from '../../services/IsValidEmail';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo-orange.png';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();

      if (!email) return ToastWarning('Email is necessary!');

      if (!IsValidEmail(email)) return ToastWarning('Must be a valid email');

      return ToastSuccess(`Instructions was send to your email: ${email}`);
    },
    [email],
  );

  return (
    <div className="relative flex justify-center items-center bg-blue-500 h-screen w-screen">
      <Link to="/" className="absolute top-4 left-4 text-white">
        Back
      </Link>
      <div className="max-w-sm  px-3">
        <figure className="mb-8">
          <img src={Logo} alt="My franchise" />
        </figure>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <span className="text-center mb-4 text-white">
            Enter your email to be able to recover your password
          </span>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <Button type="submit" label="RECEIVE INSTRUCTIONS" />
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useCallback, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo-orange.png';
import { ToastSuccess, ToastWarning } from '../../services/ShowToaster';
import IsValidEmail from '../../services/IsValidEmail';

const Register: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyDoc, setCompanyDoc] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();

      if (!companyDoc || !companyName || !name || !email || !password)
        return ToastWarning('You must fill all fields');

      if (!IsValidEmail(email)) return ToastWarning('Must be a valid Email');

      const data = {
        company: {
          name: companyName,
          doc: companyDoc,
        },
        name,
        email,
        password,
      };

      localStorage.setItem('@MyFranchise-User', JSON.stringify(data));

      return ToastSuccess('User created!');
    },
    [companyDoc, companyName, email, name, password],
  );

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

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap flex-col md:flex-row text-white"
        >
          <fieldset className="md:w-1/2 md:px-2 mb-4">
            <legend className="mb-2 border-b font-semibold border-white w-full">
              Company info
            </legend>
            <Input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={e => setCompanyName(e.target.value)}
            />
            <Input
              type="number"
              name="document"
              placeholder="Document"
              onChange={e => setCompanyDoc(e.target.value)}
            />
          </fieldset>
          <fieldset className="md:w-1/2 md:px-2 mb-4">
            <legend className="mb-2 border-b font-semibold border-white w-full">
              User info
            </legend>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="w-full mb-4 text-center">
            <Button type="submit" label="REGISTER" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from 'react';
// import { FcViewDetails, FcMindMap } from 'react-icons/fc';

import User from '../../types/User';

import Logo from '../../assets/logo-orange.png';
import Input from '../../components/Input';

const Dashboard: React.FC = () => {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const data = localStorage.getItem('@MyFranchise-User');
    let obj;

    if (data) obj = JSON.parse(data) as User;

    setUser(obj);
  }, []);

  return (
    <div>
      <header className="bg-blue-500 border-blue-700 border-b-2 flex justify-between w-full h-14 px-4 py-4">
        <div>
          <figure className="mb-8 w-48 h-6 hidden md:block">
            <img src={Logo} alt="My franchise" />
          </figure>
        </div>
        <div className="text-white">
          <span>John Vidal</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto mt-4 px-2">
        <div className="flex flex-col mb-4 md:flex-row justify-between">
          <div className="mb-4">
            <span className="block text-yellow-500 font-bold text-xl">
              Olá, John Vidal
            </span>
            <span className="block">Você tem 15 filiais cadastradas</span>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <button
              type="button"
              onClick={() => setView('list')}
              className={`w-full md:w-auto py-2 px-4 mx-2 duration-200 hover:opacity-50 focus:outline-none rounded ${
                view === 'list' && 'bg-yellow-500'
              }`}
            >
              Lista
            </button>
            <button
              type="button"
              onClick={() => setView('map')}
              className={`w-full md:w-auto py-2 px-4 mx-2 duration-200 hover:opacity-50 focus:outline-none rounded ${
                view === 'map' && 'bg-yellow-500'
              }`}
            >
              Mapa
            </button>
          </div>
        </div>
        <div>
          <Input type="text" name="search" placeholder="Search by name" dark />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

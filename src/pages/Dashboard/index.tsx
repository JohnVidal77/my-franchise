import React, { useEffect, useState } from 'react';
// import { FcViewDetails, FcMindMap } from 'react-icons/fc';
import {
  FiTrendingUp,
  FiTrendingDown,
  FiAlertCircle,
  FiDollarSign,
} from 'react-icons/fi';

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
      <header className="bg-blue-500 shadow flex justify-between w-full h-14 px-4 py-4">
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
          <div className="mb-4 text-center md:text-left">
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

        <div className="flex flex-wrap justify-around mt-4">
          <div className="flex justify-center px-2 w-1/2 md:w-auto items-center mb-4">
            <FiDollarSign className="mr-4 text-lg md:text-3xl text-blue-600" />
            <div>
              <strong className="block text-lg md:text-2xl text-blue-600">
                14.000,00
              </strong>
              <span className="block text-blueGray-700">Caixa Total</span>
            </div>
          </div>
          <div className="flex justify-center px-2 w-1/2 md:w-auto items-center mb-4">
            <FiTrendingUp className="mr-4 text-lg md:text-3xl text-lime-600" />
            <div>
              <strong className="block text-lg md:text-2xl text-lime-600">
                05
              </strong>
              <span className="block text-blueGray-700">Lucrando</span>
            </div>
          </div>
          <div className="flex justify-center px-2 w-1/2 md:w-auto items-center mb-4">
            <FiAlertCircle className="mr-4 text-lg md:text-3xl text-yellow-500" />
            <div>
              <strong className="block text-lg md:text-2xl text-yellow-500">
                02
              </strong>
              <span className="block text-blueGray-700">Sem dados</span>
            </div>
          </div>
          <div className="flex justify-center px-2 w-1/2 md:w-auto items-center mb-4">
            <FiTrendingDown className="mr-4 text-lg md:text-3xl text-red-600" />
            <div>
              <strong className="block text-lg md:text-2xl text-red-600">
                13
              </strong>
              <span className="block text-blueGray-700">Prejuizo</span>
            </div>
          </div>
        </div>

        <div>
          <Input type="text" name="search" placeholder="Search by name" dark />
        </div>

        <div className="px-3 mt-4">
          <table className="w-full">
            <tr className="mb-2">
              <th className="text-left">Apelido</th>
              <th className="hidden md:block text-left">N de Funcionários</th>
              <th className="text-left">Caixa Mensal</th>
              <th className="hidden md:block text-left">Ultima Atualização</th>
            </tr>
            <tr className="border-l-4 border-red-600 h-10">
              <td className="pl-2">Jill</td>
              <td className="hidden md:table-cell">Smith</td>
              <td>50</td>
              <td className="hidden md:table-cell">50</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

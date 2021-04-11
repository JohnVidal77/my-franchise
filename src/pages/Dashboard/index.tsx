import React, { useEffect, useState, useCallback } from 'react';
import {
  FiTrendingUp,
  FiTrendingDown,
  FiAlertCircle,
  FiDollarSign,
} from 'react-icons/fi';

import FormatPrice from '../../services/FormatPrice';

import User from '../../types/User';
import Store from '../../types/Store';

import Logo from '../../assets/logo-orange.png';
import Input from '../../components/Input';

import StoresData from '../../data/stores.json';

const filterButton =
  'duration-200 rounded bg-white cursor-pointer filter hover:brightness-90';

type FilterValue = '' | 'profit' | 'noData' | 'loss';

const Dashboard: React.FC = () => {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [user, setUser] = useState<User | null>();
  const [statusFilter, setStatusFilter] = useState<FilterValue>('');
  const [filter, setFilter] = useState('');
  const [stores, setStores] = useState<Array<Store>>(StoresData);

  const originalStoresData = StoresData;

  useEffect(() => {
    const data = localStorage.getItem('@MyFranchise-User');
    let obj;

    if (data) obj = JSON.parse(data) as User;

    setUser(obj);
  }, []);

  useEffect((): void => {
    if (filter === '' && statusFilter === '')
      return setStores(originalStoresData);

    let array: Array<Store> = stores;

    if (statusFilter !== '') {
      array = array.filter((storie): Store | void => {
        if (statusFilter === 'profit' && storie.money > 0) return storie;

        if (statusFilter === 'loss' && storie.money < 0) return storie;

        if (statusFilter === 'noData' && storie.money === 0) return storie;
      });
    }

    if (filter !== '') {
      array = array.filter(storie =>
        storie.name.toLowerCase().includes(filter),
      );
    }

    return setStores(array);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, statusFilter]);

  const totalMoney = originalStoresData.reduce(
    (total, storie) => storie.money + total,
    0,
  );

  const storiesProfiting = originalStoresData.reduce((total, storie) => {
    if (storie.money > 0) return total + 1;
    return total;
  }, 0);

  const storiesWithoutData = originalStoresData.reduce((total, storie) => {
    if (storie.money === 0) return total + 1;
    return total;
  }, 0);

  const storiesLoss = originalStoresData.reduce((total, storie) => {
    if (storie.money < 0) return total + 1;
    return total;
  }, 0);

  const renderBorderBasedOnStorieStatus = useCallback((value: number) => {
    if (value < 0) return 'border-red-600';

    if (value > 0) return 'border-lime-600';

    return 'border-yellow-600';
  }, []);

  const handleFilterClick = useCallback(
    (filterValue: FilterValue) => {
      if (statusFilter !== '') return setStatusFilter('');

      return setStatusFilter(filterValue);
    },
    [statusFilter],
  );

  return (
    <div>
      <header className="bg-blue-500 shadow flex justify-between w-full h-14 px-4 py-4">
        <div>
          <figure className="mb-8 w-48 h-6 hidden md:block">
            <img src={Logo} alt="My franchise" />
          </figure>
        </div>
      </header>

      <main className="max-w-5xl mx-auto mt-4 px-4">
        <div className="flex flex-col mb-4 md:flex-row justify-between">
          <div className="mb-4 text-center md:text-left">
            <span className="block text-yellow-500 font-bold text-xl">
              Hello, {user?.name}
            </span>
            <span className="block">
              You have {stores.length} branches registered
            </span>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <button
              type="button"
              onClick={() => setView('list')}
              className={`w-full md:w-auto py-2 px-4 mx-2 duration-200 hover:opacity-50 focus:outline-none rounded ${
                view === 'list' && 'bg-yellow-500'
              }`}
            >
              List
            </button>
            <button
              type="button"
              onClick={() => setView('map')}
              className={`w-full md:w-auto py-2 px-4 mx-2 duration-200 hover:opacity-50 focus:outline-none rounded ${
                view === 'map' && 'bg-yellow-500'
              }`}
            >
              Map
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-around mt-4">
          <div className="flex justify-center px-2 w-1/2 md:w-auto items-center mb-4">
            <FiDollarSign className="mr-4 text-lg md:text-3xl text-blue-600" />
            <div>
              <strong className="block text-lg md:text-2xl text-blue-600">
                {FormatPrice(totalMoney)}
              </strong>
              <span className="block text-blueGray-700">Total Cash</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleFilterClick('profit')}
            className={`flex focus:outline-none justify-center px-2 w-1/2 md:w-auto items-center mb-4 ${filterButton} ${
              statusFilter === 'profit' && 'border-2 border-lime-600'
            }`}
          >
            <FiTrendingUp className="mr-4 text-lg md:text-3xl text-lime-600" />
            <div>
              <strong className="block text-lg md:text-2xl text-lime-600">
                {storiesProfiting}
              </strong>
              <span className="block text-blueGray-700">Profiting</span>
            </div>
          </button>
          <button
            type="button"
            onClick={() => handleFilterClick('noData')}
            className={`flex focus:outline-none justify-center px-2 w-1/2 md:w-auto items-center mb-4 ${filterButton} ${
              statusFilter === 'noData' && 'border-2 border-yellow-600'
            }`}
          >
            <FiAlertCircle className="mr-4 text-lg md:text-3xl text-yellow-500" />
            <div>
              <strong className="block text-lg md:text-2xl text-yellow-500">
                {storiesWithoutData}
              </strong>
              <span className="block text-blueGray-700">Without Data</span>
            </div>
          </button>
          <button
            type="button"
            onClick={() => handleFilterClick('loss')}
            className={`flex focus:outline-none justify-center px-2 w-1/2 md:w-auto items-center mb-4 ${filterButton}  ${
              statusFilter === 'loss' && 'border-2 border-red-600'
            }`}
          >
            <FiTrendingDown className="mr-4 text-lg md:text-3xl text-red-600" />
            <div>
              <strong className="block text-lg md:text-2xl text-red-600">
                {storiesLoss}
              </strong>
              <span className="block text-blueGray-700">Losing</span>
            </div>
          </button>
        </div>

        <div>
          <Input
            type="text"
            onChange={e => setFilter(e.target.value)}
            name="search"
            placeholder="Search by name"
            dark
          />
        </div>

        <div className="px-3 mt-4 mb-8">
          <table className="w-full">
            <tr className="mb-2">
              <th className="text-left">Name</th>
              <th className="hidden md:block text-center">Employees</th>
              <th className="text-left">Monthly Money</th>
              <th className="hidden md:block text-left">Last Update</th>
            </tr>

            {stores.map(storie => (
              <tr
                className={`border-l-4 ${renderBorderBasedOnStorieStatus(
                  storie.money,
                )} h-10`}
              >
                <td className="pl-2">{storie.name}</td>
                <td className="hidden md:table-cell text-center">
                  {storie.employees}
                </td>
                <td className="text-left">{FormatPrice(storie.money)}</td>
                <td className="hidden md:table-cell">{storie.updatedAt}</td>
              </tr>
            ))}
          </table>
          {stores.length === 0 && (
            <span className="block w-full mt-4 text-3xl font-bold text-center text-blueGray-300">
              No data to display
            </span>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

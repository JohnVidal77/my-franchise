import React from 'react';

interface IProps {
  name: string;
  placeholder: string;
}

const Input: React.FC<IProps> = ({ name, placeholder }: IProps) => {
  return (
    <input
      className="border-white border-2 rounded mb-2 bg-transparent p-2 placeholder-white text-white focus:border-yellow-500"
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;

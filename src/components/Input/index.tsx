import React, { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  dark?: boolean;
  placeholder: string;
}

const Input: React.FC<IProps> = ({
  name,
  placeholder,
  dark,
  ...rest
}: IProps) => {
  return (
    <input
      className={`w-full border-2 rounded mb-2 p-2 ${
        dark
          ? 'border-blueGray-500 placeholder-blueGray-500 text-gray-700'
          : 'border-white placeholder-white text-white bg-transparent'
      }  duration-200 focus:outline-none focus:border-yellow-500`}
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;

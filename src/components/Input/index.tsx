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
      className={`w-full border-2 rounded mb-2 bg-transparent p-2 ${
        dark
          ? 'border-gray-500 placeholder-gray-500 text-gray-700'
          : 'border-white placeholder-white text-white'
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

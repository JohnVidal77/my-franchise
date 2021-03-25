import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<IProps> = ({ label, ...rest }: IProps) => {
  return (
    <button
      className="w-auto bg-green-500 duration-200 uppercase hover:bg-green-300 cursor-pointer text-white py-2 px-4 m-2 rounded"
      type="submit"
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;

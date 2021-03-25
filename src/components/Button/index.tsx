import React from 'react';

interface IProps {
  label: string;
}

const Button: React.FC<IProps> = ({ label }: IProps) => {
  return (
    <button
      className="w-auto bg-green-500 duration-200 uppercase hover:bg-green-300 cursor-pointer text-white py-2 px-4 m-2 rounded"
      type="submit"
    >
      {label}
    </button>
  );
};

export default Button;

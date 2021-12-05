import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

const Button = ({ type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {type === 'submit' && <IoIosAddCircle />}
      {type === 'deleteAll' && <span className="text-red-800 font-bold text-xl">Delete All</span>}
      {type === 'deleteOne' && <TiDelete className="text-red-800" />}
    </button>
  );
};

export default Button;

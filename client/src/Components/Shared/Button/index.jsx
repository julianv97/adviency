import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

const Button = ({ type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {type === 'submit' && <IoIosAddCircle />}
      {type === 'deleteAll' && <span>Delete All</span>}
      {type === 'deleteOne' && <TiDelete />}
    </button>
  );
};

export default Button;

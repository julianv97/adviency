import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';

const Form = ({ addGift }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newGift = {
      name: e.target.gift.value,
    };
    // Acá podría ir lógica para avisar que no se puede agregar un regalo vacío
    if (!newGift.name) return;
    addGift(newGift);
    e.target.gift.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="gift" />
      <button type="submit">
        <IoIosAddCircle />
      </button>
    </form>
  );
};

export default Form;

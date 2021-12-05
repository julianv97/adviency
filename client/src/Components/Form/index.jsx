import React from 'react';

import Button from '../Shared/Button';

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
      <Button type="submit" />
    </form>
  );
};

export default Form;

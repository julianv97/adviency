import React from 'react';
import { TiDelete } from 'react-icons/ti';

const SingleGift = ({ gift, deleteGift }) => {
  return (
    <div className="flex flex-row justify-between">
      <h3>{gift.name}</h3>
      <button onClick={() => deleteGift(gift._id)}>
        <TiDelete />
      </button>
    </div>
  );
};

export default SingleGift;

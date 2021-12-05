import React from 'react';

import Button from '../Shared/Button';

const SingleGift = ({ gift, deleteGift }) => {
  return (
    <li className="flex flex-row justify-between">
      <p>{gift.name}</p>
      <Button type="deleteOne" onClick={() => deleteGift(gift._id)} />
    </li>
  );
};

export default SingleGift;

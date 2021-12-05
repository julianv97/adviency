import React from 'react';
import SingleGift from '../SingleGift';

const ListOfGifs = ({ gifts, deleteGift }) => {
  return (
    <ul>
      {gifts.map((gift) => (
        <SingleGift key={gift._id} gift={gift} deleteGift={deleteGift} />
      ))}
    </ul>
  );
};

export default ListOfGifs;

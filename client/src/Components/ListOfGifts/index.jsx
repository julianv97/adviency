import React from 'react';
import SingleGift from '../SingleGift';

const ListOfGifs = ({ gifts, deleteGift }) => {
  if (gifts.length === 0) return <p>No gifts yet</p>;

  return (
    <div>
      {gifts.map((gift) => (
        <SingleGift key={gift._id} gift={gift} deleteGift={deleteGift} />
      ))}
    </div>
  );
};

export default ListOfGifs;

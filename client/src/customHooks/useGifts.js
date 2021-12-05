import { useEffect, useState } from 'react';

const url = process.env.REACT_APP_API

const useGifts = () => {
  const [gifts, setGifts] = useState([]);

  const addGift = (gift) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gift),
    })
      .then((response) => response.json())
      .then((data) => setGifts([...gifts, data]))
      .catch((err) => console.log(err));
  };

  const deleteGift = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => setGifts(gifts.filter((gift) => gift._id !== id)))
      .catch((err) => console.log(err));
  };

  const deleteAllGifts = () => {
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => setGifts([]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGifts(data))
      .catch((err) => console.log(err));
  }, []);

  return { gifts, addGift, deleteGift, deleteAllGifts };
};

export default useGifts;

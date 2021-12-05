import React, { useState, useEffect } from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifts';
import Form from './Components/Form';

function App() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/gifts')
      .then((response) => response.json())
      .then((data) => setGifts(data))
      .catch((err) => console.log(err));
  }, []);

  const addGift = (gift) => {
    fetch('http://localhost:4000/gifts', {
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
    fetch(`http://localhost:4000/gifts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(() => setGifts(gifts.filter((gift) => gift._id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center App">
      <div>
        <h1>Gifts</h1>
        <Form addGift={addGift} />
        <ListOfGifs gifts={gifts} deleteGift={deleteGift} />
      </div>
    </div>
  );
}

export default App;
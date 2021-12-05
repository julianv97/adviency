import React from 'react';
import useGifts from './customHooks/useGifts';
import ListOfGifs from './Components/ListOfGifts';
import Form from './Components/Form';
import Button from './Components/Shared/Button';
import './App.css';

function App() {
  const { gifts, addGift, deleteGift, deleteAllGifts } = useGifts();

  return (
    <div className="w-full h-screen flex justify-center items-center App">
      <div>
        <h1>Gifts</h1>
        <Form addGift={addGift} />
        {gifts.length === 0 ? (
          <p>No gifts yet</p>
        ) : (
          <div>
            <ListOfGifs gifts={gifts} deleteGift={deleteGift} />
            <Button type="deleteAll" onClick={deleteAllGifts} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

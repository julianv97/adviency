import React from 'react';
import useGifts from './customHooks/useGifts';
import ListOfGifs from './Components/ListOfGifts';
import Form from './Components/Form';
import Button from './Components/Shared/Button';
import './App.css';

function App() {
  const { gifts, addGift, deleteGift, deleteAllGifts } = useGifts();

  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center App">
      <div className="bg-green-600 p-4 min-w-max w-3/12 rounded-lg flex flex-col items-center">
        <h1 className="text-center text-4xl mb-4 align-top font-MountainsOfChristmas">Gifts</h1>
        <Form addGift={addGift} />
        {gifts.length === 0 ? (
          <p>No gifts yet &#128532;</p>
        ) : (
          <div className="w-full flex flex-col items-stretch justify-between">
            <ListOfGifs gifts={gifts} deleteGift={deleteGift} />
            <Button type="deleteAll" onClick={deleteAllGifts} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

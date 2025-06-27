// File: src/Redux/puppies/AddPuppyForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPuppy } from './puppiesSlice';

function AddPuppyForm({ onSuccess, onCancel }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [sex, setSex] = useState('Maschio');

  const handleSubmit = (e) => {
    // ================================================================= //
    // QUESTA È LA RIGA PIÙ IMPORTANTE DEL FILE.
    // Impedisce al browser di ricaricare la pagina quando si clicca
    // il pulsante "Aggiungi Cucciolo".
    e.preventDefault();
    // ================================================================= //

    // Il resto della logica viene eseguito dopo aver bloccato il ricaricamento.
    const newPuppyData = { name, age, description, image, sex };
    dispatch(addNewPuppy(newPuppyData));
    onSuccess(); // Chiude la modale
  };

  // 'onSubmit' sul tag <form> chiama la nostra funzione 'handleSubmit'
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300">Nome</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-md bg-gray-700 text-white p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Età</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required className="mt-1 block w-full rounded-md bg-gray-700 text-white p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Descrizione</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required className="mt-1 block w-full rounded-md bg-gray-700 text-white p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">URL Immagine</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required className="mt-1 block w-full rounded-md bg-gray-700 text-white p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Sesso</label>
        <select value={sex} onChange={(e) => setSex(e.target.value)} className="mt-1 block w-full rounded-md bg-gray-700 text-white p-2">
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        {/* Questo pulsante ha 'type="button"' per NON inviare il form */}
        <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Annulla
        </button>
        {/* Questo pulsante ha 'type="submit"' (di default) e invia il form */}
        <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
          Aggiungi Cucciolo
        </button>
      </div>
    </form>
  );
}

export default AddPuppyForm;
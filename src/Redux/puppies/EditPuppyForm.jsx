// File: src/Redux/puppies/EditPuppyForm.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateExistingPuppy } from './puppiesSlice';

function EditPuppyForm({ puppyToEdit, onSuccess, onCancel }) {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  // 1. Aggiungiamo lo stato per il sesso anche qui
  const [sex, setSex] = useState('');

  useEffect(() => {
    // Questo si assicura che il form si popoli con i dati giusti quando si apre
    if (puppyToEdit) {
      setName(puppyToEdit.name);
      setAge(puppyToEdit.age);
      setDescription(puppyToEdit.description);
      setImage(puppyToEdit.image);
      // 2. Pre-compiliamo anche il sesso
      setSex(puppyToEdit.sex || 'Maschio'); // Aggiungo un default nel caso il dato manchi
    }
  }, [puppyToEdit]);

  const handleSubmit = (e) => {
    // ================================================================= //
    // ANCHE QUI, `e.preventDefault()` è la prima cosa che facciamo.
    e.preventDefault();
    // ================================================================= //
    
    // 3. Includiamo il sesso nei dati da aggiornare
    const updatedPuppyData = { id: puppyToEdit.id, name, age, description, image, sex };
    dispatch(updateExistingPuppy(updatedPuppyData));
    onSuccess();
  };

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
      {/* 4. Aggiungiamo il campo per il sesso anche nel form di modifica */}
      <div>
        <label className="block text-sm font-medium text-gray-300">Sesso</label>
        <select value={sex} onChange={(e) => setSex(e.target.value)} className="mt-1 block w-full rounded-md bg-gray-700 text-white p-2">
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Annulla
        </button>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Salva Modifiche
        </button>
      </div>
    </form>
  );
}

export default EditPuppyForm;
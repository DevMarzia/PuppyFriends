// File: src/pages/Dashboard.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PuppyList from '../Redux/puppies/PuppyList.jsx';
import AddPuppyForm from '../Redux/puppies/AddPuppyForm.jsx';
import EditPuppyForm from '../Redux/puppies/EditPuppyForm.jsx';
import { deleteExistingPuppy } from '../Redux/puppies/puppiesSlice';

function Dashboard() {
  const dispatch = useDispatch();
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPuppy, setEditingPuppy] = useState(null);

  const handleEdit = (puppy) => {
    setEditingPuppy(puppy);
  };

  const handleDelete = (puppyId) => {
    if (window.confirm("Sei sicuro di voler eliminare questo cucciolo?")) {
      dispatch(deleteExistingPuppy(puppyId));
    }
  };

  return (
    <>
      <Navbar/>
      <div className="container mx-auto pt-20 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8 text-white min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Pannello Admin - Gestione Cuccioli</h1>
            <p className="text-gray-400 mt-1">Questa è la sezione dell'Admin, qui potrai gestire gli animali.</p>
          </div>
          <button onClick={() => setShowAddModal(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Aggiungi Nuovo Cucciolo
          </button>
        </div>

        <PuppyList onEdit={handleEdit} onDelete={handleDelete} />

        {/* Modale per AGGIUNGERE */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[1001]">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Aggiungi Nuovo Cucciolo</h2>
              <AddPuppyForm 
                onSuccess={() => setShowAddModal(false)} 
                onCancel={() => setShowAddModal(false)}
              />
            </div>
          </div>
        )}

        {/* Modale per MODIFICARE */}
        {editingPuppy && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[1001]">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Modifica: {editingPuppy.name}</h2>
              <EditPuppyForm 
                puppyToEdit={editingPuppy} 
                onSuccess={() => setEditingPuppy(null)} 
                onCancel={() => setEditingPuppy(null)} 
              />
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Dashboard;
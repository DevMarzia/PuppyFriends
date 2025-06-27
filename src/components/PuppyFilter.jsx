// File: src/components/PuppyFilterBar.jsx
// Questo componente contiene solo i controlli per filtrare.

import React from 'react';

// Riceve le funzioni per gestire i cambiamenti dei filtri dal componente genitore
function PuppyFilterBar({ onSearchChange, onAgeChange, onSexChange }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6 flex flex-col sm:flex-row gap-4 items-center">
      {/* Filtro per NOME */}
      <div className="w-full sm:w-1/2">
        <label htmlFor="search" className="sr-only">Cerca</label>
        <input
          type="text"
          id="search"
          placeholder="Cerca per nome..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:ring-sky-500 focus:border-sky-500"
        />
      </div>

      {/* Filtro per ETÀ */}
      <div className="w-full sm:w-1/4">
        <label htmlFor="age" className="sr-only">Filtra per età</label>
        <input
          type="text"
          id="age"
          placeholder="Filtra per età (es. 2 mesi)"
          onChange={(e) => onAgeChange(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:ring-sky-500 focus:border-sky-500"
        />
      </div>

      {/* Filtro per SESSO */}
      <div className="w-full sm:w-1/4">
        <label htmlFor="sex" className="sr-only">Filtra per sesso</label>
        <select
          id="sex"
          onChange={(e) => onSexChange(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:ring-sky-500 focus:border-sky-500"
        >
          <option value="">Tutti i sessi</option>
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>
    </div>
  );
}

export default PuppyFilterBar;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import { store } from '../src/Redux/store.js'; // Assicurati che esista
import './index.css'; // Importa Tailwind (o il tuo CSS globale)

import ChiSiamo from './pages/ChiSiamo.jsx';
import CardsPuppy from './pages/CardsPuppy.jsx'
import Admin from './pages/Dashboard.jsx'; // Assicurati che esista
import Login from './pages/LoginForm.jsx'; // Assicurati che esista

// importo stile mappa
import 'leaflet/dist/leaflet.css' 

const router = createBrowserRouter([
  {
   path: "/",
   element: <App />,
  },
  {
    path: "/chi-siamo",
    element: <ChiSiamo />,
  },
  {
    path: "/cards-puppy",
    element: <CardsPuppy />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/card-puppy/:id",
    element: <CardsPuppy />,
  },
  
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

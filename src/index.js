import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // Importeer de functies en router provider van React Router
import Home from './routes/Home';
import Contact from './routes/Contact';

// Maak een nieuwe instantie van de router aan
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); // Normaal staat hier onze <App />, maar de router neemt dit voor nu over.

reportWebVitals();
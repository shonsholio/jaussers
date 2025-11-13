import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import CiudadJardin from './components/CiudadJardin';
import Home from './components/Home'
import Granadillo from './components/Granadillo';
import LaCampina from './components/LaCampina';
import Paraiso from './components/Paraiso';
import Tivoli from './components/Tivoli';
import VillaCarolina from './components/VillaCarolina';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/ciudadJardin',
    element: <CiudadJardin />
  },
  {
    path:'/granadillo',
    element: <Granadillo />
  },
  {
    path:'/lacampina',
    element: <LaCampina />
  },
  {
    path:'/paraiso',
    element: <Paraiso />
  },
  {
    path:'/tivoli',
    element: <Tivoli />
  },
  {
    path:'/villacarolina',
    element: <VillaCarolina />
  },
  {
    path:'/contact',
    element: <h1>contact</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

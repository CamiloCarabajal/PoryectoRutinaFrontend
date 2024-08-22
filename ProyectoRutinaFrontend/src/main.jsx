import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa ReactDOM desde 'react-dom/client'
import './index.css';  // Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap
import App from './App';  // Componente principal

// Usa createRoot en lugar de render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

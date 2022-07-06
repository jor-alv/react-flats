import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './assets/application.scss';
import App from './components/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// index.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/CSS/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
export default defineConfig({
  plugins: [react()],
  base: '/Trust-Website/',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

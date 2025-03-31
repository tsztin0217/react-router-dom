import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// src/main.jsx

import { BrowserRouter } from 'react-router';

import './index.css'
import App from './App.jsx'

// src/main.jsx

// Nest the App component inside the BrowserRouter component to enable routing:
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

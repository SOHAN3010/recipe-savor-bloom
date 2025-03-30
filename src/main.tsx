
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { toast } from 'sonner'

// Declare toast property on window
declare global {
  interface Window {
    toast: typeof toast;
  }
}

// Make toast available globally
window.toast = toast;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

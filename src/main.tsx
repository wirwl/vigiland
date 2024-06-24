import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Index } from './pages/Index/index.tsx'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index/>    
  </React.StrictMode>,
)

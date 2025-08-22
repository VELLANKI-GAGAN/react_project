import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page1 from './Page1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page1/>
  </StrictMode>,
)
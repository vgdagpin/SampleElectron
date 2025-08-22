import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AddEntry from './routes/AddEntry'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-entry" element={<AddEntry />} />
      </Routes>
  </HashRouter>
  </StrictMode>,
)

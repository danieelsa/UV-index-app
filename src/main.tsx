import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import UVIndexPage from './pages/UVIndexPage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <UVIndexPage/>
    </App>
  </StrictMode>,
)

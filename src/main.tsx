// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// React-router and tailwind
import App from './App.tsx'
import './index.css'

library.add(fab, far, fas)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

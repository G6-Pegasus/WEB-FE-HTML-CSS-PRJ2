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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import './index.css'


library.add(fab, far, fas)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Crear una instancia de QueryClient
const queryClient = new QueryClient();

// Crear raíz de la aplicación
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Proveedor de QueryClient que envuelve toda la app */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import routes from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SobreNosotros from './pages/SobreNosotros.jsx'
import Login from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sobre-nosotros',
    element: <SobreNosotros />,
  },
  {
    path: '/login',
    element: <Login />
  }
];

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

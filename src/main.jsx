import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/root/Root.jsx'
import Home from './components/pages/Home.jsx'
import Apps from './components/pages/menu/Apps.jsx'
import Installation from './components/pages/menu/Installation.jsx'


const router = createBrowserRouter([
  {path: '/', Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'home', Component: Home},
      {path: 'apps', Component: Apps},
      {path: 'installation', Component: Installation}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

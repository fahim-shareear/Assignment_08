import { StrictMode, Suspense } from 'react'
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
      {path: 'apps',
        loader: () => fetch("/Appdata.json"), 
        element: <Suspense fallback={<span className="loading loading-spinner text-error absolute top-50% left-50% transform translate(-50%, -50%) w-300"></span>}>
          <Apps></Apps>
        </Suspense>},
      {path: 'installation', Component: Installation}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

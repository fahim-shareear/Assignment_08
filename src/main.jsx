import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/root/Root.jsx'
import Home from './components/pages/Home.jsx'
import Apps from './components/pages/menu/Apps.jsx'
import Installation from './components/pages/menu/Installation.jsx'
import Appdetails from './components/appdetailspages/Appdetails.jsx'
import PageNotFound from './components/errorpages/PageNotFound.jsx'

const delayedLoader = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return fetch("/Appdata.json");
};

const loaderUI = (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <span className="loading loading-spinner text-error w-300"></span>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        loader: delayedLoader,
        element: (
          <Suspense fallback={loaderUI}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'home',
        loader: delayedLoader,
        element: (
          <Suspense fallback={loaderUI}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'apps',
        loader: delayedLoader,
        element: (
          <Suspense fallback={loaderUI}>
            <Apps />
          </Suspense>
        )
      },
      {
        path: 'installation',
        loader: delayedLoader,
        element: (
          <Suspense fallback={loaderUI}>
            <Installation />
          </Suspense>
        )
      },
      {
        path: 'app/:id',
        loader: delayedLoader,
        element: (
          <Suspense fallback={loaderUI}>
            <Appdetails />
          </Suspense>
        )
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

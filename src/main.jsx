import ReactDOM from 'react-dom/client'
import React, {lazy, Suspense} from 'react'
import './index.scss'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx';


const Home = lazy(() => import("./Pages/Home/Home.jsx"));

const Contact = lazy(() => import("./Pages/Contact/Contact.jsx"));





const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  }
])








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h1>...Loading</h1>}>
    <RouterProvider router={router}/>

    </Suspense>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Help from './Pages/Help';
//import Empty from './Pages/Empty';

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Cart",
    element:<Cart/>
  },
  {
    path:"/Help",
    element:<Help/>
  },
  {
    path:"/Shop",
    element:<Shop/>
  }])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

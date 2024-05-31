import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children:[
      {
        path: "/home",
        element: <div>Hello from home!</div>,
      },
      {
        path :"/contact",
        element : <div>hello from contact</div>
      },
      {
        path :"/blog",
        element : <div>hello from blog</div>
      },
      {
        path :'/FAQ',
        element : <div>hello from FAq</div>
      },
    ]
  }
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
        path :"/users",
        loader : ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path :'/FAQ',
        element : <div>hello from FAq</div>
      },
      {
        path : '/users/:userId',
        loader :({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      }
    ]
  }
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

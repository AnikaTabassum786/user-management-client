import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddUser from './components/AddUser.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import UserDetails from './components/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,

    children:[
      {
        index:true,
        loader:()=>fetch('http://localhost:3000/users'),
        Component:Home
      },
      {
        path:'/add-user',
        Component:AddUser
      },
      {
        path:'/users/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component:UserDetails

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>    
  </StrictMode>,
)

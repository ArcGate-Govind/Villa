import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css'
import PropertiesPage from '../src/View/PropertiesPage.jsx';
import ContactUsPage from '../src/View/ContactUsPage.jsx';
import PropertiesDetails from '../src/View/PropertiesDetails.jsx';
import HomePage from './View/HomePage.jsx';

 const appRouter = createBrowserRouter([
  {
    path:"/",
  element:<App/>,
  children:[
    {
          path:"/",
          element:<HomePage/>
    },
    {
      path:"/properties",
      element:<PropertiesPage/>
     },
     {
      path:"propertiesdetails",
      element:<PropertiesDetails/>
     },
     {
           path:"/contactUs",
           element:<ContactUsPage/>
     }
  ]
 },
 

])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}/>)
  
  

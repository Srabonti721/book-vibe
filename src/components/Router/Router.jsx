import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../../App';
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import Read from '../Pages/Read/Read';
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            { index: true,
                 path: '/',
                 loader:()=>fetch('BookData.json'), 
                 Component: Home 
                },
                {
                    path:'/about',
                    Component:About,
                },
                {
                    path:'/bookDetalis/:id',
                    loader:()=>fetch('./BookData.json'),
                    Component:BookDetails,
                },
                {
                    path:'read',
                    loader:()=>fetch('./BookData.json'),
                    Component:Read,
                }
            ],
    },
    {
        path: 'app',
        Component: App,
    }
])
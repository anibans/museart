import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../Layout";
import Lorem from '../components/Lorem/Lorem';
import ScrollEffect from '../components/Lorem/ScrollEffect';
import { ParallaxProvider } from 'react-scroll-parallax';
import ErrorPage from '../components/Error/ErrorPage';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  errorElement={<ErrorPage />} element={<Layout />} >
        <Route path='' element={<Lorem />} />
    </Route>
))

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router
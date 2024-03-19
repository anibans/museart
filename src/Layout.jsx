import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Layout
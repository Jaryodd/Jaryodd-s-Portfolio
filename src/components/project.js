import React from 'react'
import { Routes, Route } from "react-router-dom"


import Home from './home'
import Portfolio from './portfolio'
import Aboutme from './aboutme'
import Contact from './contact'


export default function Project() {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            />
            <Route
                exact
                path="/portfolio"
                element={<Portfolio />}
            />
            <Route
                exact
                path="/aboutme"
                element={<Aboutme />}
            />
            <Route
                exact
                path="/contact"
                element={<Contact />}
            />
        </Routes>
    )
}

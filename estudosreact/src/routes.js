import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import { Users } from './Users'
const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes;

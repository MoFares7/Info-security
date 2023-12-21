import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/AuthPages/login_page';
import SignUpPage from '../pages/AuthPages/register_teacher_page';
const RouteApp = () => {
        return (
                <Routes>
                      
                        {/* <Route path="/login" element={<LoginPage />} /> */}
                        <Route index element={<LoginPage />} />
                        <Route path="/signUp" element={<SignUpPage />} />

                        {/* <Route path="/home" element={<HomePage />} /> */}
                </Routes>

        )
}

export default RouteApp

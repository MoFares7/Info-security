import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/AuthPage/LoginPage';
import SignUpPage from '../pages/AuthPage/SignUpPage';


const RouteApp = () => {
        return (
                <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signUp" element={<SignUpPage />} />
                        <Route element={<SidebarLayout />}>
                                <Route index element={<HomePage />} />
                                <Route path="/public" element={<PublicGroupPage />} />
                                <Route path="/privet" element={<PrivetGroupPage />} />
                                <Route path="/files/:groupId" element={<FilesPage />} />
                                <Route path="/login" element={<LoginPage />} />
                        </Route>
                </Routes>

        )
}

export default RouteApp

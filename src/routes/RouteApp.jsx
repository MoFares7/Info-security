import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentHomePage from '../feature/home/pages/Student_Home_Page';
import DoctorHomePage from '../feature/home/pages/Doctor_Home_Page';
const RouteApp = () => {
        return (
                <Routes>

                        {/* <Route path="/login" element={<LoginPage />} /> */}
                        {/* <Route index element={<LoginPage />} />
                        <Route path="/signUp" element={<SignUpPage />} /> */}

                        {/* <Route path="/" element={<StudentHomePage />} /> */}
                        <Route path="/" element={<DoctorHomePage />} />
                </Routes>

        )
}

export default RouteApp

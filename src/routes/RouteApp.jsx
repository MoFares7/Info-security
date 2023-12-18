import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouteApp = () => {
        return (
                <Routes>
                        //! when create login and signUp page only Uncomment this statments and import
                        {/* <Route path="/login" element={<LoginPage />} /> */}
                        {/* <Route path="/signUp" element={<SignUpPage />} /> */}

                        {/* <Route path="/home" element={<HomePage />} /> */}
                </Routes>

        )
}

export default RouteApp

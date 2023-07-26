import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomeComponents from '../pages/HomeComponents';
import PageNotFound from "../errors/PageNotFound";
import DashboardComponents from "../admin/pages/DashboardComponents";
import LoginComponents from "../pages/auth/LoginComponents";
import RouteMiddleware from "../middleware/RouteMiddleware";

export default function RouteComponents() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeComponents/>}/>
                <Route path="/login" element={<LoginComponents/>}/>
                <Route element={<RouteMiddleware/>}>
                    <Route path="/dashboard" element={<DashboardComponents/>}/>
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>

        </>
    )
}

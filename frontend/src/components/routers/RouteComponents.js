import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomeComponents from '../pages/HomeComponents';
import PageNotFound from "../errors/PageNotFound";
import DashboardComponents from "../admin/pages/DashboardComponents";
import LoginComponents from "../pages/auth/LoginComponents";
import RouteMiddleware from "../middleware/RouteMiddleware";
import RegisterComponents from "../pages/auth/RegisterComponents";
import CategoryComponents from "../admin/pages/CategoryComponents";
import RoleMiddleware from "../middleware/RoleMiddleware";
import UsersComponents from "../admin/pages/UsersComponents";

export default function RouteComponents() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeComponents/>}/>
                <Route path="/login" element={<LoginComponents/>}/>
                <Route path="/register" element={<RegisterComponents/>}/>
                <Route element={<RouteMiddleware/>}>
                    <Route path="/dashboard" element={<DashboardComponents/>}/>
                    <Route element={<RoleMiddleware/>}>
                        <Route path="/manage-users" element={<UsersComponents/>}/>
                        <Route path="/manage-category" element={<CategoryComponents/>}/>
                    </Route>

                </Route>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>

        </>
    )
}

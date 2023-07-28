import {Navigate, Outlet} from "react-router";

function RouteMiddleware() {
    let isLogin = localStorage.getItem('token') ?? false;
    return isLogin ? <Outlet/> : <Navigate to="/login"/>;
}

export default RouteMiddleware;
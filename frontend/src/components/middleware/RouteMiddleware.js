import {Navigate, Outlet} from "react-router";

function RouteMiddleware() {
    let isLogin = false;
    return isLogin ? <Outlet/> : <Navigate to="/login"/>;
}

export default RouteMiddleware;
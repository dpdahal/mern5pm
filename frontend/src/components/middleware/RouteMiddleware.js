import {useEffect, useState} from "react";
import {Navigate, Outlet} from "react-router";
import api from "../../config/api";

function RouteMiddleware() {
    let token = localStorage.getItem('token') ?? false;
    useEffect(() => {
        api.get('/login/valid-token', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.data.isLogin === false) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }else{
                localStorage.setItem('userId',response.data.user.id)
            }
        }).catch((error) => {
            console.log(error.response.data);
        });

    },[]);


    return token ? <Outlet/> : <Navigate to="/login"/>;
}

export default RouteMiddleware;
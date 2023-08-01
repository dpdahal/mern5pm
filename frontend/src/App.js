import React, {useEffect, useState} from 'react';
import {createContext} from "react";
import RouteComponents from './components/routers/RouteComponents';
import "./css/dashboard.css";
import api from "./config/api";

export const UserContext = createContext(null);

export default function App() {
    const [userData, setUserData] = useState({});
    let userId = localStorage.getItem('userId') ?? false;
    const getUserData = async () => {
        await api.get(`/user/${userId}`).then((response) => {
            setUserData(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    useEffect(() => {
        getUserData();
    },[]);


    return (
        <div>
            <UserContext.Provider value={userData}>
                <RouteComponents/>
            </UserContext.Provider>
        </div>
    )
}

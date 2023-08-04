import {UserContext} from "../../App";
import {useContext} from "react";
import {Outlet} from "react-router";

function RoleMiddleware() {
    const user = useContext(UserContext);
    if(user.name){
            if (user.role != 'admin') {
            window.location.href = '/dashboard';
        } else {
            return <Outlet/>
        }
    }    

}

export default RoleMiddleware;
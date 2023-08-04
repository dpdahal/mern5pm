import TopHeader from "../layouts/TopHeader";
import AsideBar from "../layouts/AsideBar";
import {useEffect, useState} from "react";
import api from "../../../config/api";

function UsersComponents() {
    const [users, setUsers] = useState([]);
    let token = localStorage.getItem('token') ?? false;


    const getUsers = async () => {
        await api.get('/user',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <TopHeader/>
            <div className="container-fluid">
                <div className="row">
                    <AsideBar username={'admin'}/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
                        <h1>User Components</h1>
                        <hr/>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {users && users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.role}</td>
                                        <td><img src={user.image} alt={user.name} width="50"/></td>
                                        <td>
                                            <button className="btn btn-sm btn-success">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        </div>
    )

}

export default UsersComponents;
import {useState} from "react";
import axios from "axios";
import HeaderComponents from "../../layouts/HeaderComponents";
import FooterComponents from "../../layouts/FooterComponents";
import api from "../../../config/api";

function LoginComponents() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault();
        const sendData = {email, password}
        try {
            await api.post('login', sendData).then(res => {
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    window.location.href = '/dashboard'
                } else {
                    alert(res.data.message)
                }
            });
        } catch (e) {
            console.log(e)
        }

    }


    return (
        <div>
            <HeaderComponents/>
            <div className="container mt-3 mb-5">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <h1>Login</h1>
                    </div>
                    <div className="col-md-12">
                        <form action="" onSubmit={login}>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                       onChange={(e) => setPassword(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="form-group mb-3">
                                <button className="btn btn-success">Login</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
            <FooterComponents/>
        </div>
    )
}

export default LoginComponents
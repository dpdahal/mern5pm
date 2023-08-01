import {useState} from "react";
import HeaderComponents from "../../layouts/HeaderComponents";
import FooterComponents from "../../layouts/FooterComponents";
import api from "../../../config/api";

function RegisterComponents() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState(null);

    const register = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', gender);
        formData.append('image', image);
        api.post('/user', formData).then(res => {
            if(res.data.message===true){
                alert('User created successfully');
                setName('');
                setEmail('');
                setPassword('');
                setGender('');
                setImage(null);
            }else{
                alert('User not created');
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <HeaderComponents/>
            <div className="container mt-3 mb-5">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <h1>Register</h1>
                    </div>
                    <div className="col-md-12">
                        <form action="" onSubmit={register}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" required
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" required
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" required
                                       onChange={(e) => setPassword(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="gender">Gender</label>
                                <select name="gender" required className="form-control"
                                        onChange={(e) => setGender(e.target.value)} id="gender">
                                    <option value="">---Select Gender---</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image">Image</label>
                                <input type="file" className="form-control"
                                       onChange={(e) => setImage(e.target.files[0])}/>

                            </div>
                            <div className="form-group mb-3">
                                <button className="btn btn-success">Register</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
            <FooterComponents/>
        </div>

    )
}

export default RegisterComponents;
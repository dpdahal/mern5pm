import {useState,useEffect} from 'react';
import TopHeader from "../layouts/TopHeader";
import AsideBar from "../layouts/AsideBar";
import api from '../../../config/api';

function CategoryComponents() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        await api.get('/category').then(response => {
            setCategory(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getCategory();
    },[])

    const handleInputt = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value);
            const slug = e.target.value.toLowerCase().replace(/ /g, '-');
            setSlug(slug);
        }else{
            setSlug(e.target.value);
        }
    }
    
    const addCategory = async (e) => {
        e.preventDefault();
        let sendData ={
            userId: localStorage.getItem('userId'),
            name: name,
            slug: slug,
        }
        await api.post('/category', sendData).then(response => {
            if(response.data){
                getCategory();
                setName('');
                setSlug('');
                alert('Category Added Successfully');
            }else{
                alert(response.data);
            }

        }).catch(error => {
            console.log(error);
        })
        
    }


    return (
        <div>
            <TopHeader />
            <div className="container-fluid">
                <div className="row">
                    <AsideBar username={'admin'}/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        
                        <h1>Manage Category</h1>
                        <hr/>
                        <form action="" onSubmit={addCategory}>

                            <div className="form-group mb-3">
                                <label htmlFor="name">Category Name</label>
                                <input type="text" name="name" value={name}
                                onChange={handleInputt}
                                id="name" className="form-control"
                                 placeholder="Category Name" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="slug">Slug </label>
                                <input type="text" name="slug" value={slug} id="slug"
                                onChange={handleInputt}
                                className="form-control"
                                 placeholder="Slug" />
                            </div>
                            <div className="form-group mb-3">
                                <button>Add Category</button>
                            </div>
                         </form>
                            <hr/>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        category.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.slug}</td>
                                                    <td>{item.userId.name}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-info">Edit</button>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                    </main>
                </div>
            </div>
        </div>
    )

}

export default CategoryComponents;
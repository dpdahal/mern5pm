import { useState, useEffect } from 'react';
import TopHeader from "../layouts/TopHeader";
import AsideBar from "../layouts/AsideBar";
import api from '../../../config/api';

function AddNewsComponents() {
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [introText, setIntroText] = useState('');
    const [image, setImage] = useState('');
    const [meta_title, setMetaTitle] = useState('');
    const [meta_description, setMetaDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const getCategory = async () => {
        await api.get('/category').then(response => {
            setCategory(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getCategory();
    }, [])



    const addNews = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('description', description);
        formData.append('introText', introText);
        formData.append('image', image);
        formData.append('meta_title', meta_title);
        formData.append('meta_description', meta_description);
        formData.append('categoryId', categoryId);
        formData.append('userId', localStorage.getItem('userId'));
        api.post('/news', formData).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

    }


    return (
        <div>
            <TopHeader />
            <div className="container-fluid">
                <div className="row">
                    <AsideBar username={'admin'} />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">

                        <h1>Add News</h1>
                        <hr />
                        <form action="" onSubmit={addNews}>
                            <div className="form-group mb-3">
                                <label htmlFor="categoryId">Select Category</label>
                                <select name="categoryId" id="categoryId"
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    className="form-control">
                                    <option value="">Select Category</option>
                                    {category.map((item, index) => (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" name="title" value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            id="name" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="slug">Slug </label>
                                        <input type="text" name="slug" value={slug} id="slug"
                                            onChange={(e) => setSlug(e.target.value)}
                                            className="form-control" />
                                    </div>

                                </div>

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image">Image </label>
                                <input type="file" name="image" id="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="form-control" />
                            </div>



                            <div className="form-group mb-3">
                                <label htmlFor="meta_title">Meta Title </label>
                                <input type="text" name="meta_title" value={meta_title} id="meta_title"
                                    onChange={(e) => setMetaTitle(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="meta_description">Meta Description </label>
                                <textarea name="meta_description" value={meta_description} id="meta_description"
                                    onChange={(e) => setMetaDescription(e.target.value)}
                                    className="form-control" />

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="intro_text">Intro text </label>
                                <textarea name="intro_text" value={introText} id="intro_text"
                                    onChange={(e) => setIntroText(e.target.value)}
                                    className="form-control" />

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description">Description </label>
                                <textarea name="description" value={description} id="description"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="form-control" />

                            </div>



                            <div className="form-group mb-3">
                                <button className='btn btn-success'>Add News</button>
                            </div>
                        </form>

                    </main>
                </div>
            </div>
        </div>
    )

}

export default AddNewsComponents;
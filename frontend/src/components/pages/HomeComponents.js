import React, { useState, useEffect } from 'react'
import HeaderComponents from '../layouts/HeaderComponents'
import FooterComponents from '../layouts/FooterComponents'
import { Link } from 'react-router-dom'

export default function HomeComponents() {
    const [news, setNews] = React.useState([])

    const getNews = async () => {
        try {
            const response = await fetch('http://localhost:8000/news/')
            const data = await response.json()
            setNews(data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    console.log(news)
    return (
        <div className='container'>
            <HeaderComponents />
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    </div>
                    <div className="carousel-item">
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row">
                    {news && news.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 shadow-sm">
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <Link to={`/news/${item.id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <FooterComponents />
        </div>
    )
}

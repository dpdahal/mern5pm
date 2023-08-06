import React, { useState, useEffect} from 'react'
import HeaderComponents from '../layouts/HeaderComponents'
import FooterComponents from '../layouts/FooterComponents'
import { Link, useParams } from 'react-router-dom'

export default function NewsDetailsComponents() {
    const [news, setNews] = useState([])
    let newsId = useParams()
    

    const getNews = async () => {
        try {
            const response = await fetch(`http://localhost:8000/news/${newsId.id}`)
            const data = await response.json()
            console.log(data)
            setNews(data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className='container'>
            <HeaderComponents />
            <div className="container">

                <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-4 shadow-sm">
                                <img src={news.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p className="card-text">{news.description}</p>
                                    
                                </div>
                            </div>
                        </div>
                    

                </div>
            </div>

            <FooterComponents />
        </div>
    )
}

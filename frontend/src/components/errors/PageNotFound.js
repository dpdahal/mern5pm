import HeaderComponents from '../layouts/HeaderComponents'
import FooterComponents from '../layouts/FooterComponents'

export default function PageNotFound() {

    return (
        <div className='container'>
            <HeaderComponents/>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='error-template'>
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                    </div>
                </div>
            </div>

            <FooterComponents/>
        </div>
    )
}

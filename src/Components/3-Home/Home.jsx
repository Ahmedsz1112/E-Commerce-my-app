import '../3-Home/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Products from '../4-products/Products';
import Category from '../5-Category/Category';
import SellingProduct from '../6-SellingProduct/SellingProduct';
import ExploreProduct from '../7-ExploreProduct/ExploreProduct';
import Featured from '../8-Featured/Featured';

function Home() {
    let images = {
        img1: '/01.jpg',
        img2: '/02.jpg',
        img3: '/03.jpg',
        img4: '/04.jpg',
        img5: '/05.jpg',
    }    

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 pt-5 border-end">
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item fs-6 d-flex justify-content-between align-items-center">Woman's Fashion
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </li>
                                <li className="list-group-item fs-6 d-flex justify-content-between align-items-center">Men's Fashion
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </li>
                                <li className="list-group-item fs-6">Electronics</li>
                                <li className="list-group-item fs-6">Home & Lifestyle</li>
                                <li className="list-group-item fs-6">Medicine</li>
                                <li className="list-group-item fs-6">Sports & Outdoor</li>
                                <li className="list-group-item fs-6">Baby's & Toys</li>
                                <li className="list-group-item fs-6">Groceries & Pets</li>
                                <li className="list-group-item fs-6">Health & Beauly</li>
                            </ul>
                        </div>
                        <div className="col-lg-9 col-md-12 mt-5 home-image">
                            <div id="carouselExampleCaptions" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button className="btn-carous " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                    <button className="btn-carous" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button className="btn-carous active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button className="btn-carous" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button className="btn-carous" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
                                <div className="carousel-inner height-contant">
                                    <div className="carousel-item">
                                        <img src={images.img1} className="w-100 img-fluid" alt="..." />
                                        <div className="mx-5 my-5 d-none d-md-block position-absolute top-0 start-0 text-white">
                                            <p className='my-3 d-flex fs-4 align-content-center'><FontAwesomeIcon icon={faApple} className='fs-1 me-3' /> iphone 14 series</p>
                                            <h2 className='py-3'>up to 10% <br /> off Voucher</h2>
                                            <a href="/#" className='text-white ms-2 pb-1  fw-semibold text-decoration-none border-bottom'>ShopNow </a><FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={images.img2} className="w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="carousel-item active">
                                        <img src={images.img5} className="w-100 img-fluid" alt="..." />
                                        <div className="mx-5 my-5 d-none d-md-block position-absolute top-0 start-0 text-white">
                                            <p className='my-3 d-flex fs-4 align-content-center'><FontAwesomeIcon icon={faApple} className='fs-1 me-3' /> iphone 14 series</p>
                                            <h2 className='py-3'>up to 10% <br /> off Voucher</h2>
                                            <a href="/#" className='text-white ms-2 pb-1  fw-semibold text-decoration-none border-bottom'>ShopNow </a><FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={images.img4} className="w-100 img-fluid" alt="..." />
                                        <div className="mx-5 my-5 d-none d-md-block position-absolute top-0 start-0 text-white">
                                            <p className='my-3 d-flex fs-4 align-content-center'><FontAwesomeIcon icon={faApple} className='fs-1 me-3' /> iphone 14 series</p>
                                            <h2 className='py-3'>up to 10% <br /> off Voucher</h2>
                                            <a href="/#" className='text-white ms-2 pb-1  fw-semibold text-decoration-none border-bottom'>ShopNow </a><FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={images.img3} className="w-100 img-fluid" alt="..." />
                                        <div className="mx-5 my-5 d-none d-md-block position-absolute top-0 start-0 text-white">
                                            <p className='my-3 d-flex fs-4 align-content-center'><FontAwesomeIcon icon={faApple} className='fs-1 me-3' /> iphone 14 series</p>
                                            <h2 className='py-3'>up to 10% <br /> off Voucher</h2>
                                            <a href="/#" className='text-white ms-2 pb-1  fw-semibold text-decoration-none border-bottom'>ShopNow </a><FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Products/>
            <Category/>
            <SellingProduct/>
            <ExploreProduct/>
            <Featured/>
        </>
    )
};

export default Home;
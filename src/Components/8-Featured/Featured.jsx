import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../8-Featured/featured.css'
import { faArrowUp, faCircleCheck, faHeadphones, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
function Featured() {

    let images = {
        img1: '/palystation.jpg',
        img2: '/women.jpg',
        img3: '/speaker.jpg',
        img4: 'https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg',
    }

    return (
        <section className='featured mb-5 position-relative'>
            <div className="container">
                <div className='d-flex' >
                    <span className='span-bg'></span>
                    <span className=' align-self-center  fw-bold' style={{ color: "rgb(219, 68, 68)" }}>Featured</span>
                </div>
                <div className='d-flex mb-5'>
                    <h2 className='me-5 mt-3 fw-bold'>New Arrival</h2>
                </div>

                <div className='row g-4'>
                    <div className="col-lg-6 col-sm-12 position-relative">
                        <img src={images.img1} className='w-100 h-100 rounded' alt="" />
                        <div className=' position-absolute bottom-0 p-4 text-white'>
                            <h3>Play Station 5</h3>
                            <p>Black And White version  </p>
                            <a href="/#" className='text-white text-decoration-none border-bottom fw-semibold'>shop Now</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 position-relative h-100">
                        <img src={images.img2} className='w-100 h-50 mb-4 rounded' alt="" />
                        <div className=' position-absolute bottom-50 p-4 mb-4 text-white'>
                            <h3>Women's Collections</h3>
                            <p className=' fs-6'>Black And White version  </p>
                            <a href="/#" className='text-white text-decoration-none border-bottom fw-semibold'>shop Now</a>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 position-relative">
                                <img src={images.img3} className='w-100 speaker rounded' alt="" />
                                <div className=' position-absolute bottom-0 p-4 text-white'>
                                    <h3>Speakers</h3>
                                    <p>Black And White version  </p>
                                    <a href="/#" className='text-white text-decoration-none border-bottom fw-semibold'>shop Now</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 position-relative">
                                <img src={images.img4} className='w-100 speaker rounded' alt="" />
                                <div className=' position-absolute bottom-0 p-4 text-white'>
                                    <h3>Perfume</h3>
                                    <p>Black And White version  </p>
                                    <a href="/#" className='text-white text-decoration-none border-bottom fw-semibold'>shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row g-3 py-5 mt-5">
                        <div className="col-lg-4 col-md-6 d-flex flex-column  align-items-center">
                            <div className='icons'>
                                <FontAwesomeIcon icon={faTruck} className='fs-4' />
                            </div>
                            <h4>Free And Fast Delivery</h4>
                            <p>Free delivery for all Orders over $140</p>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                            <div className='icons'>
                                <FontAwesomeIcon icon={faHeadphones} className='fs-4' />
                            </div>
                            <h4>24/7 CUSTOMER SERVICE</h4>
                            <p>Free delivery for all Orders over $140</p>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                            <div className='icons'>
                                <FontAwesomeIcon icon={faCircleCheck} className='fs-4' />
                            </div>
                            <h4>MONEY BACK GUARANTEE</h4>
                            <p>Free delivery for all Orders over $140</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' position-absolute bottom-0 end-0 me-5 arrow-up'>
                <FontAwesomeIcon icon={faArrowUp} className='fs-4' />
            </div>
        </section>
    )
};

export default Featured;
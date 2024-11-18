import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHeadphones, faTruck } from '@fortawesome/free-solid-svg-icons';
import '../about/about.css';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



export default function About() {
  return (
    <div className='my-5 container'>
      <ul className=' list-unstyled d-flex'>
        <li ><Link className='pe-2 opacity-50 text-decoration-none text-black' to='/'>Home  /</Link></li>
        <li >About</li>
      </ul>
      <div className='d-flex justify-content-between'>
        <div className="row g-4">
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
            <h1 className='my-4'>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique autem sit, amet, delectus dolorum rem, nam rerum praesentium eos illum earum recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique autem sit, amet, delectus dolorum rem, nam rerum praesentium eos illum earum recusandae.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique autem sit, amet, delectus dolorum rem, nam rerum praesentium eos illum earum recusandae.</p>
          </div>
          <div className='col-lg-6 col-md-12'>
            <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
          </div>
        </div>
      </div>

      <div className="row py-5 mt-5 g-4">
        <div className="col-lg-3 col-md-4 col-sm-6 ">
          <div className="card d-flex flex-column  align-items-center rounded ">
            <div className='icons mt-3'>
              <FontAwesomeIcon icon={faTruck} className='fs-4' />
            </div>
            <h4>10.5k</h4>
            <p>Free delivery for all</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 about-card">
          <div className="card active d-flex flex-column  align-items-center rounded">
            <div className='icons mt-3'>
              <FontAwesomeIcon icon={faHeadphones} className='fs-4' />
            </div>
            <h4>33k</h4>
            <p>Free delivery for all</p>
          </div>

        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 ">
          <div className="card d-flex flex-column  align-items-center rounded">
            <div className='icons mt-3'>
              <FontAwesomeIcon icon={faCircleCheck} className='fs-4' />
            </div>
            <h4>45.5k</h4>
            <p>Free delivery for all</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 ">
          <div className="card d-flex flex-column  align-items-center rounded">
            <div className='icons mt-3'>
              <FontAwesomeIcon icon={faCircleCheck} className='fs-4' />
            </div>
            <h4>25k</h4>
            <p>Free delivery for all</p>
          </div>

        </div>
      </div>

      <div className='py-5'>
        <div id="carouselExampleIndicators" class="carousel slide position-relative">
          <div class="carousel-indicators position-absolute top-100 pt-4">
            <button type="button" className="btn-carous" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" className="btn-carous" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" className="btn-carous active" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" className="btn-carous" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" className="btn-carous" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item active">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row g-4">
                <div className="col-4">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row g-4">
                <div className="col-4">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="">
                    <img src="/women.jpg" className='w-100 mb-4 rounded' alt="" />
                    <div>
                      <h3>Tom Cruies</h3>
                      <p>Founder & Chaiman</p>
                      <div className="about-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} className='mx-4' />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row py-5 mt-5 g-4">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column  align-items-center">
            <div className='icons'>
              <FontAwesomeIcon icon={faTruck} className='fs-4' />
            </div>
            <h4>Free And Fast Delivery</h4>
            <p>Free delivery for all Orders over $140</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center">
            <div className='icons'>
              <FontAwesomeIcon icon={faHeadphones} className='fs-4' />
            </div>
            <h4>24/7 CUSTOMER SERVICE</h4>
            <p>Free delivery for all Orders over $140</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center">
            <div className='icons'>
              <FontAwesomeIcon icon={faCircleCheck} className='fs-4' />
            </div>
            <h4>MONEY BACK GUARANTEE</h4>
            <p>Free delivery for all Orders over $140</p>
          </div>
        </div>
      </div>
    </div>
  )
}

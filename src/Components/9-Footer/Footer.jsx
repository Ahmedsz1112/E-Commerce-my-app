import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../9-Footer/footer.css'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <footer className='pt-5 bg-black text-white'>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-3 col-md-6  col-sm-">
                        <h4 className='mb-4'>Exclusive</h4>
                        <h6 className='mb-4'>subscribe</h6>
                        <p>Get 10% off your First order</p>
                        <form className='border w-75 p-2 rounded d-flex justify-content-between align-items-center'>
                            <input type="email" placeholder='Enter Your Email' className='text-white w-75 btn-footer border-0 bg-black'/>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </form>
                    </div> 
                    <div className="col-lg-2 col-md-6  col-sm-">
                        <h4 className='mb-4'>Support</h4>
                        <p>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-">
                        <h4 className='mb-4'>Account</h4>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-">
                        <h4 className='mb-4'>Quick Link</h4>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                    <div className="col-lg-3 col-md-4  col-sm-">
                        <h4 className='mb-4'>Download App</h4>
                        <p className=" opacity-50">Save S3 With App New User Only</p>
                        <div className='row'>
                            <div className="col-6">
                                <img src="/unnamed.jpg" className='w-100 h-75' alt="" />
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <img src="/googlepaly.png" className='w-100 rounded' alt="" />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <img src="/app-store.png" className='w-100 rounded' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="icons-footer my-1 d-flex justify-content-between me-5 ms-3 fs-4">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' border-top opacity-50'>
                    <p className='text-center py-4 m-0'>&copy; Copyrigth Rimel 2022 All right reserved</p>
                </div>
        </footer>
    )
};

export default Footer;
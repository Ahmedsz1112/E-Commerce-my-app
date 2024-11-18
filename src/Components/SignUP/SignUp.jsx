import React from 'react';
import '../SignUP/signuo.css';
import { Link } from 'react-router-dom';


export default function SignUp() {

    return (
        <>
            <div className="container">
                <div className="row my-5 pb-5">
                    <div className="col-lg-6 col-md-7 col-sm-">
                        <div className="h-100">
                            <img src="./05.jpg" className='w-100 h-100' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-1 col-sm-">
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm- mt-5">
                        <form action="" >
                            <h3>Create an account</h3>
                            <p className='mb-5'>Enter Your details below</p>
                            <input type="text" placeholder='Name' className='w-100 mb-4 border-0 border-bottom pb-2 focus' />
                            <input type="email" placeholder='Email or Phone Number' className='w-100 mb-4 border-0 border-bottom pb-2 focus' />
                            <input type="password" placeholder='Paeeword' className='w-100 mb-4 border-0 border-bottom pb-2 focus' />
                            <button className='btn btn-danger text-white w-100' type='submit'>Create Account</button>
                            <button className='btn border w-100 my-4' type='submit'>Sign up with Google</button>
                        </form>
                        <p className='text-center'>Aleady have account?  <Link to="login" className='ms-2 text-decoration-none border-bottom text-dark'> Log in</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

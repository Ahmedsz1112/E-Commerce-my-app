import React from 'react'
import '../SignUP/signuo.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';


export default function Login() {

  return (
    <div>
      <div className="container">
        <div className="row my-5 pb-5">
          <div className="col-lg-6 col-md-7">
            <div className="h-100">
              <img src="../05.jpg" className='w-100 h-100' alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-md-1">
          </div>
          <div className="col-lg-4 col-md-4 mt-5">
            <form action="" >
              <h3>Log in to Exclusive</h3>
              <p className='mb-5'>Enter Your details below</p>
              <input type="email" placeholder='Email or Phone Number' className='w-100 mb-4 border-0 border-bottom pb-2 focus' />
              <input type="password" placeholder='Paeeword' className='w-100 mb-4 border-0 border-bottom pb-2 focus' />
            </form>
            <div className=' d-flex justify-content-between align-items-center'>
              <Link  className='btn btn-danger text-white py-2 px-3' to='account'>Log in</Link>
              <Link to="" className='ms-2 text-decoration-none text-danger'>Forget Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

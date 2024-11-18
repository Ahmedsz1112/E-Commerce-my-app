import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import '../Contact/contact.css';


export default function Contact() {
  return (
    <div className='container my-5'>
      <ul className='list-unstyled d-flex'>
        <li ><Link to='/' className='pe-2 opacity-50 text-decoration-none text-black'>Home  /</Link></li>
        <li >Contact</li>
      </ul>
      <div className='row py-4 g-3'>
        <div className="col-lg-4 col-md-12 ">
          <div className="card p-5 rounded shadow-sm border-0">
          <div>
            <div className='d-flex align-items-center my-3'>
              <span className='faIcon'><FontAwesomeIcon icon={faPhone} /></span>
              <p className='m-0 fw-semibold'>Call To Us</p>
            </div>
            <p>We are available 24/7.7 days a week</p>
            <p className='pb-4 border-bottom'>Phone: +8801611112222</p>
          </div>
          <div>
            <div className='d-flex align-items-center mt-4 mb-3'>
              <span className='faIcon'><FontAwesomeIcon icon={faEnvelope} /></span>
              <p className='m-0 fw-semibold'>Wirte To Us</p>
            </div>
            <p>Fill out form and we will contact you wthin 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 ">
          <div className="card rounded shadow-sm border-0">
          <form action="" className='p-4'>
            <div className='d-flex justify-content-between row p-2'>
              <input type="text" placeholder='Your Name'  className=' col-sm-12 border-0 bg-secondary-subtle my-4 p-2 rounded'/>
              <input type="email" placeholder='Your Email' className=' col-sm-12 border-0 bg-secondary-subtle my-4 p-2 rounded' />
              <input type="text" placeholder='Your Phone'  className=' col-sm-12 border-0 bg-secondary-subtle my-4 p-2 rounded'/>
            </div>
            <textarea name="" id="" placeholder='Your Massage' rows="11" className='w-100 border-0 rounded bg-secondary-subtle p-2'></textarea>
            <button type='submit' className='text-white btn btn-danger px-4 float-end mt-3'>Send Massage</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

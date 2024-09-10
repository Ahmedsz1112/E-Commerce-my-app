import React from 'react';
import { Link } from 'react-router-dom';
import '../Error/error.css';

export default function Error() {
    return (
        <div className='container my-5 py-4'>
            <ul className='list-unstyled d-flex'>
                <li ><Link className='pe-2 opacity-50 text-decoration-none text-black' to='/'>Home  /</Link></li>
                <li >404 Error</li>
            </ul>
            <div className='text-center mt-5'>
                <h1 className='error'>404 Not Found</h1>
                <p className='mb-5'>Your visited page not found. You may go home page.</p>
                <Link to="/" className='btn btn-danger px-4'>Back to home page</Link>
            </div>
        </div>
    )
}

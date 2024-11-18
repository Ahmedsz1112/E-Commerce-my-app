import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Drop() {
    return (
            <div className="dropdown account position-relative">
                <FontAwesomeIcon icon={faUser} className='dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" />
                <ul className="dropdown-menu dropdown-account">
                    <li><a className="dropdown-item" href="/#">Manage My Account</a></li>
                    <li><a className="dropdown-item" href="/#">My Order</a></li>
                    <li><a className="dropdown-item" href="/#">My Count</a></li>
                    <li><a className="dropdown-item" href="/#">My Revcy</a></li>
                    <li><a className="dropdown-item" href="/#">Logout</a></li>
                </ul>
            </div>
    )
}

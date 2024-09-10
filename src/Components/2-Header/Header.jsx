import '../2-Header/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';
import Drop from '../Drop/Drop';

function Header() {

  return (
    <>
      <header className='mt-4'>
        <nav className="navbar navbar-expand-lg navbar-light border-bottom">
          <div className="container">
            <a className="navbar-brand fs-3 fw-semibold" href="/#">Exclusive</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto nav-underline  mb-2 mb-lg-0 align-self-center">
                <li className="nav-item mx-3">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" aria-current="page" to="contact">Contact</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" aria-current="page" to="about">About</Link>
                </li>
                <li class="nav-item mx-3">
                  <Link className="nav-link" aria-current="page" to="signup">Sign Up</Link>
                </li>
              </ul>
              <form className="d-flex align-items-center">
                <div className='d-flex position-relative'>
                  <input className="search border-0 py-2 px-3 rounded" type="search" placeholder="What are you looking for?" aria-label="Search" />
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='me-3 position-absolute end-0 align-self-center' />
                </div>
              </form>
              <Icons />
              <Drop />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
};

export default Header;

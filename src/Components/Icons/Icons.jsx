import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../Icons/icons.css'
import { fillContext } from '../contextproduct/ContextProduct';
import { useContext } from 'react';
import { cartContext } from '../contextproduct/ContextProduct';

export default function Icons() {
    const filterData = useContext(fillContext);
    let { newdata } = filterData;

    const cartData = useContext(cartContext);
    let { card } = cartData;

    return (
            <div className='iconNone'>
                <Link to='wshlist' className="position-relative text-black as">
                    <FontAwesomeIcon icon={faHeart} className='icon-focy fs-4 ms-4' role="button" tabIndex="0" />
                    <span className="position-absolute top-6 start-100 translate-middle px-1  bg-danger border border-light rounded-circle w-50 text-center text-white icon-header">
                        {newdata.length}
                    </span>
                </Link>
                <Link to='cart' className="position-relative text-black as">
                    <FontAwesomeIcon icon={faCartShopping} className='icon-focy fs-4 ms-4' role="button" tabIndex="0" />
                    <span className="position-absolute top-6 start-100 translate-middle px-1  bg-danger border border-light rounded-circle w-50 text-center text-white icon-header">
                        {card.length}
                    </span>
                </Link>

            </div>
    )
}




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


function Detail({x}) {
    return (
        <>
            <Link to={`${x}`} className='heart-shop me-2 mt-2 rounded-pill text-black'><FontAwesomeIcon icon={faEye} /></Link>
        </>
    )
};

export default Detail;
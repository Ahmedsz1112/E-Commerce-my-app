import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { fillContext } from '../contextproduct/ContextProduct';



function Heart({x}) {
    const filterData = useContext(fillContext);

    let { handelHeart } = filterData;


    return (
        <>
            <span onClick={() => handelHeart(x)} className='heart-shop me-2 mt-2 rounded-pill'><FontAwesomeIcon icon={faHeart} /></span>
        </>
    )
};

export default Heart;
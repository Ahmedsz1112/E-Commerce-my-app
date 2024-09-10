import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fillContext } from '../contextproduct/ContextProduct';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { ProdutsContext } from '../contextproduct/ContextProduct';
import Carts from '../iconsProductAll/Cart';


function WishList() {
    const data = useContext(ProdutsContext);


    const filterData = useContext(fillContext);
    let { newdata, deleteIndex, deleletAll} = filterData;

    return (
        <div className=" container my-5">
            <div className=" d-flex justify-content-between py-4">
                <p>{`Wishlist(${newdata.length})`}</p>
                <button onClick={() => deleletAll()} className="btn border px-4">Move All To Bag</button>
            </div>
            <div className="d-flex row g-3 overflow-hidden my-5">
                {newdata.map((x) => {
                    return <div className="col-3 " key={x.id}>
                        <div className='p-4 border h-75 text-center position-relative'>
                            <span className='bg-danger position-absolute top-0 start-0 m-2 text-white px-2 rounded'>sale</span>
                            <div className=' position-absolute end-0 top-0 d-flex flex-column'>
                                <span onClick={() => deleteIndex(x.id)} className='heart-shop me-2 mt-2 rounded-pill'><FontAwesomeIcon icon={faTrashCan} /></span>
                            </div>
                            <img src={x.images} alt={x.title} className='w-75 h-100' />
                            <Carts x={x.id}/>
                        </div>
                        <p>{x.title}</p>
                        <p className='text-danger fw-semibold'>${x.price}</p>
                    </div>
                })}
            </div>
            <div className="container border-top py-5">
                <div className='d-flex' >
                    <span className='span-bg'></span>
                    <span className=' align-self-center  fw-bold' style={{ color: "rgb(219, 68, 68)" }}>Today's</span>
                </div>
                <div className='d-flex'>
                    <h2 className='me-5 mt-3 fw-bold'>Flash Sales</h2>
                    <div className='d-flex ms-auto align-self-center' >
                        <button className='btn border px-3 py-2'>See All</button>
                    </div>
                </div>
                <div className="d-flex overflow-hidden my-5">
                    {data.map((x) => {
                        return <div className="new-product col-3 px-1" key={x.id}>
                            <div className='p-4 border h-75 text-center position-relative'>
                                <span className='bg-danger position-absolute top-0 start-0 m-2 text-white px-2 rounded'>sale</span>
                                <div className=' position-absolute end-0 top-0 d-flex flex-column'>
                                    <span className='heart-shop me-2 mt-2 rounded-pill'><FontAwesomeIcon icon={faEye} /></span>
                                </div>
                                <img src={x.images} alt={x.title} className='w-75 h-100' />
                                <Carts x={x.id}/>
                            </div>
                            <p>{x.title}</p>
                            <p className='text-danger fw-semibold'>${x.price}</p>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
};
export default WishList;
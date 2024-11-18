import '../4-products/products.css'
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProdutsContext } from '../contextproduct/ContextProduct';
import Heart from '../iconsProductAll/Heart';
import Detail from '../iconsProductAll/Detail';
import Carts from '../iconsProductAll/Cart';


function Products() {
    const data = useContext(ProdutsContext);

    const [toDay, setToday] = useState(new Date())
    let d = toDay.getDate()
    let h = toDay.getHours()
    let m = toDay.getMinutes()
    let s = toDay.getSeconds()

    useEffect(() => {
        setInterval(() => {
            setToday(new Date())
        }, 1000);
    }, [])


    function handelRight() {
        let change = document.querySelector(".scroll-arr")
        change.classList.add("overflow-x-auto")
    }

    return (
        <section className='product my-5 pt-5'>
            <div className="container">
                <div className='d-flex' >
                    <span className='span-bg'></span>
                    <span className=' align-self-center  fw-bold' style={{ color: "rgb(219, 68, 68)" }}>Today's</span>
                </div>
                <div className='d-flex'>
                    <h2 className='me-5 mt-3 fw-bold'>Flash Sales</h2>
                    <div className='d-flex ps-5'>
                        <div className='mx-2 text-center position-relative'>
                            <span className='m-0 fs-6 fw-semibold'>Days</span>
                            <h3 className='fw-bold'>{d < 10 ? `0${d}` : d}<span className='text-danger position-absolute start-100 top-25'>:</span></h3>
                        </div>
                        <div className='mx-2 text-center position-relative'>
                            <span className='m-0 fs-6 fw-semibold'>Hours</span>
                            <h3 className='fw-bold'>{h > 12 ? `0${h - 12}` : h}<span className='text-danger position-absolute start-100 top-25'>:</span></h3>
                        </div>
                        <div className='mx-2 text-center position-relative'>
                            <span className='m-0 fs-6 fw-semibold'>Minutes</span>
                            <h3 className='fw-bold'>{m < 10 ? `0${m}` : m}<span className='text-danger position-absolute start-100 top-25'>:</span></h3>
                        </div>
                        <div className='mx-2 text-center'>
                            <span className='m-0 fs-6 fw-semibold'>Seconds</span>
                            <h3 className='fw-bold'>{s < 10 ? `0${s}` : s}</h3>
                        </div>
                    </div>
                    <div className='d-flex ms-auto align-self-center' >
                        <span className='arrow-roun me-2'><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <span onClick={() => handelRight()} className='arrow-roun'><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>
            </div>
            <div className="d-flex overflow-hidden my-5 ms-5 ps-5 scroll-arr">
                {data.map((x) => {
                    return <div className="products col-3 px-3" key={x.id}>
                        <div className='p-4 border h-75 text-center position-relative'>
                            <span className='bg-danger position-absolute top-0 start-0 m-2 text-white px-2 rounded'>sale</span>
                            <div className=' position-absolute end-0 top-0 d-flex flex-column'>
                                <Heart x={x.id}/>
                                <Detail x={x.id} />
                            </div>
                            <img src={x.images} alt={x.title} className='w-75 h-100' />
                            <Carts x={x.id}/>
                        </div>
                        <p>{x.title}</p>
                        <p className='text-danger fw-semibold'>${x.price}</p>
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-center border-bottom pb-5">
                <button className='btn btn-danger px-5 py-3'>View All Poducts</button>
            </div>
        </section>
    )
};

export default Products;
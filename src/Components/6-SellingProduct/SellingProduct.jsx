
import '../6-SellingProduct/sellingproduct.css'
import { useEffect, useContext } from 'react';
import { useState } from 'react';
import { ProdutsContext } from '../contextproduct/ContextProduct';
import Heart from '../iconsProductAll/Heart';
import Detail from '../iconsProductAll/Detail';
import Carts from '../iconsProductAll/Cart';


function SellingProduct() {
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

    let images = {
        img: '/headphone.jpg'
    }

    return (
        <section className='selling'>
            <div className="container border-top py-5">
                <div className='d-flex' >
                    <span className='span-bg'></span>
                    <span className=' align-self-center  fw-bold' style={{ color: "rgb(219, 68, 68)" }}>Today's</span>
                </div>
                <div className='d-flex'>
                    <h2 className='me-5 mt-3 fw-bold'>Flash Sales</h2>
                    <div className='d-flex ms-auto align-self-center' >
                        <button className='btn btn-danger px-3 py-2'>View All</button>
                    </div>
                </div>
                <div className="row my-5">
                    {data.filter((e) => {
                        if (e.id < 5) {
                            return e;
                        }
                    }
                    ).map((x) => {
                        return <div className="pro col-lg-3 col-md-6 col-sm-12 px-3" key={x.id}>
                            <div className='p-4 border h-75 text-center position-relative'>
                                <span className='bg-danger position-absolute top-0 start-0 m-2 text-white px-2 rounded'>sale</span>
                                <div className=' position-absolute end-0 top-0 d-flex flex-column'>
                                    <Heart x={x.id}/>
                                    <Detail x={x.id}/>
                                </div>
                                <img src={x.images} alt={x.title} className='w-75 h-100' />
                                <Carts x={x.id}/>
                            </div>
                            <p>{x.title}</p>
                            <p className='text-danger fw-semibold'>${x.price}</p>
                        </div>
                    }
                    )}
                </div>

                <div className='head-phone position-relative'>
                    <img src={images.img} className='w-100' alt="" />
                    <div className=' position-absolute top-0 p-5 w-50'>
                        <p style={{ color: "rgb(0, 255, 102)" }}>Categories</p>
                        <h1 className='text-white my-5'>Enhance Your Music Experience</h1>
                        <div className='d-flex text-white mb-5'>
                            <div className='me-2 text-center time'>
                                <h5 className='fw-bold m-0'>{d < 10 ? `0${d}` : d}</h5>
                                <span className='m-0 fw-semibold'>Days</span>
                            </div>
                            <div className='me-2 text-center time'>
                                <h5 className='fw-bold m-0'>{h > 12 ? `${h - 12}` : h}</h5>
                                <span className='m-0 fw-semibold'>Hours</span>
                            </div>
                            <div className='me-2 text-center time'>
                                <h5 className='fw-bold m-0'>{m < 10 ? `0${m}` : m}</h5>
                                <span className='m-0 fw-semibold'>Minutes</span>
                            </div>
                            <div className='me-2 text-center time'>
                                <h5 className='fw-bold m-0'>{s < 10 ? `0${s}` : s}</h5>
                                <span className='m-0 fw-semibold'>Seconds</span>
                            </div>
                        </div>
                        <button className='btn text-white px-4' style={{ backgroundColor: "rgb(0, 255, 102)" }}>Buy Now!</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SellingProduct;
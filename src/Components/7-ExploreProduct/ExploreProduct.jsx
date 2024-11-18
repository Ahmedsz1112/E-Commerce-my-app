import '../7-ExploreProduct/exploreproduct.css'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProdutsContext } from '../contextproduct/ContextProduct';
import Heart from '../iconsProductAll/Heart';
import Detail from '../iconsProductAll/Detail';
import Carts from '../iconsProductAll/Cart';


function ExploreProduct() {
    const data = useContext(ProdutsContext);


    return (
        <section className='explore'>
            <div className="container">
                <div className='d-flex' >
                    <span className='span-bg'></span>
                    <span className=' align-self-center  fw-bold' style={{ color: "rgb(219, 68, 68)" }}>Our Products</span>
                </div>
                <div className='d-flex mb-5'>
                    <h2 className='me-5 mt-3 fw-bold'>Explore Our Products</h2>
                    <div className='d-flex ms-auto align-self-center' >
                        <span className='arrow-roun me-2'><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <span className='arrow-roun'><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>
                <div className="row">
                    {data.filter((e) => {
                        if (e.id < 9) {
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
                <div className="container d-flex justify-content-center pb-5">
                    <button className='btn btn-danger px-5 py-3'>View All Poducts</button>
                </div>
            </div>
        </section>
    )
};

export default ExploreProduct;

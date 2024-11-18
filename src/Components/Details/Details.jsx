import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Details/detais.css';
import { useContext } from 'react';
import { ProdutsContext } from '../contextproduct/ContextProduct';
import Carts from "../iconsProductAll/Cart";
import Detail from "../iconsProductAll/Detail";
import Heart from '../iconsProductAll/Heart';

function Details() {
    const [product, setProduct] = useState([]);
    const data = useContext(ProdutsContext);


    let { productID } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productID}`)
            .then(res => res.json())
            .then(json => setProduct(json));
    }, [])

    return (
        <div className='container my-5 py-4'>
            <ul className='list-unstyled d-flex'>
                <li ><Link className='pe-2 opacity-50 text-decoration-none text-black' to='/'>Account  /</Link></li>
                <li ><Link className='pe-2 opacity-50 text-decoration-none text-black' to='/'>Gaming  /</Link></li>
                <li >Havic HV G-92</li>
            </ul>
            <div className="row my-5 g-4 ">
                <div className="col-lg-2 col-md-4 col-sm- ">
                    <img src={product.images} alt={product.title} className="w-100 pb-4 bg-body-secondary"/>
                    <img src={product.images} alt={product.title} className="w-100 pb-4 bg-body-secondary my-4" />
                    <img src={product.images} alt={product.title} className="w-100 pb-4 bg-body-secondary" />
                </div>
                <div className="col-lg-6 col-md-8 col-sm-">
                    <img src={product.images} alt={product.title} className="w-100 bg-body-secondary h-100" />
                </div>
                <div className="col-lg-4 col-md-12 col-sm- ps-5">
                    <div>
                        <h2>{product.category}</h2>
                        <p className="fs-3">${product.price}</p>
                        <p className="pb-3 border-bottom">{product.description}</p>
                        <div className=" d-flex align-items-center ">
                            <p className="m-0">Colors:</p>
                            <div className=" d-flex ms-4 align-items-center">
                                <span style={{background: '#A0BCE0'}} className="colors"></span>
                                <span style={{background: '#E07575'}} className="colors"></span>
                            </div>
                        </div>
                        <div className=" d-flex my-2">
                            <p>Size:</p>
                            <div className=" d-flex ms-3">
                                <button className="btn border p-0 sizeing">xs</button>
                                <button className="btn border p-0 sizeing">s</button>
                                <button className="btn border active p-0 sizeing">M</button>
                                <button className="btn border p-0 sizeing">L</button>
                                <button className="btn border p-0 sizeing">XL</button>
                            </div>
                        </div>
                        <div className=" d-flex  my-2 align-items-center justify-content-between">
                            <div className=" d-flex fs-5">
                                <span className="border py-1 px-3 icon-link icon-link-hover">-</span>
                                <span className="border py-1 px-4">1</span>
                                <span className="border py-1 px-3">+</span>
                            </div>
                            <botton className="btn btn-danger px-4">Buy Now</botton>
                            <div className="border">
                                <FontAwesomeIcon icon={faHeart} className="py-2 px-2" />
                            </div>
                        </div>
                        <div className="border mt-3">
                            <div className="border-bottom ps-3 pt-3">
                                <h5>Free Delivery</h5>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                            <div className="ps-3 pt-3">
                                <h5>Free Delivery</h5>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="container border-top py-5">
                <div className='d-flex' >
                    <span className='span-bg'></span>
                    <span className=' align-self-center  fw-bold' style={{ color: "rgb(219, 68, 68)" }}>Related Item</span>
                </div>
                
                <div className="row g-3">
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

            </div>
        </div>
    )
};
export default Details;
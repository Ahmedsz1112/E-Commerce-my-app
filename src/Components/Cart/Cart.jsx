import { cartContext } from '../contextproduct/ContextProduct';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Cart/cart.css';
import { useState } from 'react';


function Cart() {
    const cartData = useContext(cartContext);
    let { card , deleteCard} = cartData;
    

    let [val, setVal] = useState([])
    
    // let asa = val.filter((q) => console.log(q.price))
    

    function handelCounter(id){
        let a = document.querySelector(".number-cart").value
        let datas = [...card];
        for (let i = 0; i < datas.length; i++) {
            if(datas[i].id === id){
                setVal(datas[i].price * +a)
            }
        }
    }
    return (
        <div className=' container my-5'>
            <ul className='list-unstyled d-flex'>
                <li ><Link className='pe-2 opacity-50 text-decoration-none text-black' to='/'>Home  /</Link></li>
                <li >cart</li>
            </ul>
            <div className=' d-flex justify-content-between ps-5 pe-4 py-3 shadow-sm my-5'>
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
            </div>
            {card.map((x) => {
                return <div key={x.id}>
                    <div className='position-relative shadow-sm d-flex align-items-center justify-content-between pe-4 py-2 mb-5'>
                        <span onClick={() => deleteCard(x.id)} className='bg-danger position-absolute top-0 start-0 m-2 text-white px-2 rounded-pill close'>X</span>
                        <div className=' d-flex align-items-center'>
                            <img src={x.images} alt={x.title} className='image-cart' />
                            <span className=''>{x.category}</span>
                        </div>
                        <span className='fw-semibold'>${x.price}</span>
                        <input onChange={() => handelCounter(x.id)} type='number' className='number-cart' min={1} placeholder='1' step={1}/>
                        <span className='fw-semibold'>${Math.round(val)}</span>
                    </div>
                </div>
            })}
            <div className=' d-flex justify-content-between mb-5'>
                <button className="btn border"><Link to="/" className='text-black text-decoration-none'>Return To Shop</Link></button>
                <button className="btn border">Update Cart</button>
            </div>

            <div className='row g-3 pb-5 pt-3'>
                <form action="" className='col-6'>
                    <input type="text" placeholder='Coupon Code' className='py-1 px-4' />
                    <button className='btn btn-danger text-white ms-4 px-4'>Apply Copon</button>
                </form>
                <div className='border p-3 col-6 rounded'>
                    <h4>Cart Total</h4>
                    <div className=' d-flex justify-content-between border-bottom py-2'>
                        <span>Subtotal</span>
                        <span>${Math.round(val)}</span>
                    </div>
                    <div className=' d-flex justify-content-between border-bottom py-2'>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className=' d-flex justify-content-between py-2'>
                        <span>Total</span>
                        <span>${ Math.round(val)}</span>
                    </div>
                    <button className='btn btn-danger text-white d-block mx-auto'>Procees to checkout</button>
                </div>
            </div>
        </div>

    )
};

export default Cart;
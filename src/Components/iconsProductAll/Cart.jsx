import { cartContext } from '../contextproduct/ContextProduct';
import { useContext } from 'react';



function Carts({x}) {
    const cartData = useContext(cartContext);
    let { handelCart } = cartData;
    
    return (
        <>
            <div onClick={() => handelCart(x)} className='add-card'>Add To Card</div>
        </>
    )
};

export default Carts;
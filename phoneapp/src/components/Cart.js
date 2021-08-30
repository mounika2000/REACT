import React from 'react'
import CartList from './CartList';
import { ProductContext } from './Context';
import { Button } from './Button';

export default function Cart() {
    let productContext = React.useContext(ProductContext); // React Hook
    let {checkOut} = React.useContext(ProductContext);
    return (
        <div className="container">
            {
                productContext.cart.map(p => <CartList product={p} key={p.id}/>)
            }
            <Button onClick={() => checkOut()}>checkOut</Button>
        </div>
    )
}

import React from 'react'
import CartList from './CartList';
import { ProductContext } from './Context';

export default function Cart() {
    let productContext = React.useContext(ProductContext); // React Hook
    return (
        <div className="container">
            {
                productContext.cart.map(p => <CartList product={p} key={p.id}/>)
            }
        </div>
    )
}

import React from 'react'
import { ProductContext } from './Context';

export default function Details(props) {

    console.log(props.match.params.id);
    
    let productContext = React.useContext(ProductContext); // React Hook
    let product = productContext.getDetails(parseInt(props.match.params.id));
    let pic = product.img;
    return (
        <div className="container">
           
            <img src={`/${pic}`} /> <br />
            Title : {product.title} <br />
            Company : {product.company} <br />
            Info : {product.info}
        </div>
    )
}

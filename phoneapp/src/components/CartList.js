import React from 'react'
import { ProductContext } from './Context';
import {Button} from './Button';

export default function CartList(props) {
    let {id, img, price, count, total} = props.product;
   
    return (
        <>
        <div className="row">
            <div className="col-md-2">
                <img src={img} style={{"width":"50px"}} />
            </div>
            <div className="col-md-2">
                <Button>+</Button>
            </div>
            <div className="col-md-2">
                <Button>-</Button>
            </div>
            <div className="col-md-2">
                Price : {price}
            </div>
            <div className="col-md-2">
                Qty: {count}
            </div>
            <div className="col-md-2">
                total : {total}
            </div>
        </div>
        
        </>
    )
}

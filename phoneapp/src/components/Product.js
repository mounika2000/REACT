import React, { Component } from 'react'
import {Button} from './Button';

export default class Product extends Component {
    render() {
        let {id, img, inCart} = this.props.product;
        return (
            <div className="col-md-4 col-lg-3">
                <div className="card my-2">
                    <div className="img-container">
                        <img src={img} className="card-img-top" />
                        {
                            inCart? <Button className="cart-btn">InCart</Button>:<Button className="cart-btn fa fa-cart-plus"></Button>
                        }
                        
                    </div>
                 </div>
            </div>
        )
    }
}

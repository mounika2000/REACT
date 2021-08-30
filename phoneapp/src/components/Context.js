import React, {Component} from 'react';
// import {storeProducts} from '../data';

import axios from 'axios';


const ProductContext = React.createContext(); 

class ProductProvider extends Component {
    state = {
        products: [],
        cart : [],
        total : 0
    }
    componentDidMount() {
        this.setProducts();
    }
    getDetails = (id) => {
        return this.state.products.filter(p => p.id === id)[0];
    }

    setProducts = () => {
        let prds = [];
        // storeProducts.forEach(p => {
        //     prds.push({...p});
        // });
        // this.setState({
        //     products:prds
        // })
        // json-server
        axios.get("http://localhost:1234/products").then( response => {
            prds = response.data;
            this.setState({
                products:prds
            })
        });
   }

   checkOut = () => {
       let order = {};
       order.items = this.state.cart;
       // on login window.sessionStorage.setItem("user", "banu@gmail.com");
       order.customer = window.sessionStorage.getItem("user");
       order.date = new Date();
        axios.post("http://localhost:1234/orders", order).then( () => {
            this.setState({
                cart: []
            });
            console.log( "Order placed");
        });
   }

    // increment = (id) => {
        //
    //}



    addToCart = (id) => {
        // console.log(id + " added to cart!!!");
        let prds = this.state.cart;

        let prd = this.state.products.filter(p => p.id === id)[0];
        prd.inCart = true;
        prd.count = 1;
        prd.total = prd.price;
        prds.push(prd);
        this.setState({
            cart: prds
        });
    }

    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    addToCart: this.addToCart,
                    getDetails: this.getDetails,
                    checkOut: this.checkOut
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};
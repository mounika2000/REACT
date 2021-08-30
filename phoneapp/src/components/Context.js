import React, {Component} from 'react';
import {storeProducts} from '../data';

const ProductContext = React.createContext(); 

class ProductProvider extends Component {
    state = {
        products: [],
        cart : []
    }
    componentDidMount() {
        this.setProducts();
    }
    getDetails = (id) => {
        return this.state.products.filter(p => p.id === id)[0];
    }

    setProducts = () => {
        let prds = [];
        storeProducts.forEach(p => {
            prds.push({...p});
        });

        this.setState({
            products:prds
        })
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
                    getDetails: this.getDetails
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};
import React, {Component} from 'react';
import {storeProducts} from '../data';

const ProductContext = React.createContext(); 

class ProductProvider extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.setProducts();
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

    render() {
        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};
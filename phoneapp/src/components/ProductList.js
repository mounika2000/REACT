import React, { Component } from 'react'
import Product from './Product';
import { ProductConsumer } from './Context';

export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                  <div className="row">
                      <ProductConsumer>
                          {
                              value => {
                                  return value.products.map(p => <Product key={p.id} product={p} />)
                              }
                          }
                      </ProductConsumer>
                  </div>
            </div>
        )
    }
}

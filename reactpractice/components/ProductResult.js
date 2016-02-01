import React, { Component } from 'react'

export default class ProductResult extends Component {
  render () {
    const { productResult } = this.props;

    const productListDOM = productResult.map(function (product) {
      return <div>
        <b>{product.title}</b>:
        {product.desc}
      </div>;
    });

    return (
      <div className='productResult'>
        {productListDOM}
      </div>
    );

  }
}

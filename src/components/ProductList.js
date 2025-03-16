import React from 'react';
import '../styles/ProductList.css';
import ProductItem from './ProductItem';

const products = [
    { id: 1, name: 'Collier Pendentif Argenté', price: '80€' },
    { id: 2, name: 'Product 2', price: '20€' },
    { id: 3, name: 'Product 3', price: '30€' },
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
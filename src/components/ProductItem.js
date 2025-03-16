import React from 'react';
import '../styles/ProductItem.css';

import CareScale from './CareScale';

function ProductItem({ product, addToCart }) {
    return (
        <div className="product-item">
            <img src="path/to/your/image.jpg" alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Prix : {product.price}</p>
            <CareScale />
            <button className="add-button" onClick={() => addToCart(product)}>Ajouter au panier</button>
        </div>
    );
}

export default ProductItem;
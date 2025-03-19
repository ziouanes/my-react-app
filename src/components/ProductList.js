import React, { useState } from 'react';
import '../styles/ProductList.css';
import ProductItem from './ProductItem';
import Categories from './Categories';

const products = [
    { id: 1, name: 'Collier Pendentif Argenté', price: '80€', category: 'Necklaces' },
    { id: 2, name: 'Bracelet en Or', price: '120€', category: 'Bracelets' },
    { id: 3, name: 'Boucles d\'Oreilles Diamant', price: '150€', category: 'Earrings' },
    { id: 4, name: 'Bague Solitaire', price: '200€', category: 'Rings' }
];

const ProductList = ({ addToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            <Categories 
                selectedCategory={selectedCategory} 
                onCategoryChange={setSelectedCategory}
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
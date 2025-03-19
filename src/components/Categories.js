import React from 'react';
import '../styles/Categories.css';

const Categories = ({ selectedCategory, onCategoryChange }) => {
    const categories = [
        'All',
        'Necklaces',
        'Bracelets',
        'Earrings',
        'Rings'
    ];

    return (
        <div className="categories">
            <select 
                value={selectedCategory} 
                onChange={(e) => onCategoryChange(e.target.value)}
                className="category-select"
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Categories;
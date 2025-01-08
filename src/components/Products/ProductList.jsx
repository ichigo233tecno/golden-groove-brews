// Suggested code may be subject to a license. Learn more: ~LicenseLog:1813174333.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2449909411.
import React from 'react';

const products = [
    {id:1, name:'Essence Prime', price:100},
    {id:2, name:'Blush Nectar', price:170},
]

const ProductList = () => {
    return (
        <div>
            <h3>Products</h3>
            <ul>
                {products.map((product) => (
                    <li key = {product.id}>
                        <h4>{product.name}</h4>
                        <p>Price: ${product.price}</p>
                        <button>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
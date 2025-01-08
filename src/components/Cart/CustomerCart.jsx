import React, {useState} from "react";
import CartItem from "./CartItem";

const CustomerCart = () => {
    const [CartItems, setCartItems] = useState([
        {id:1, name:'Essence prime', price:100, quantity:10},
        {id:2, name:'Blush Nectar', price:170, quantity:6}
    ]);

    const manageQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) {
            return;
        }

        setCartItems(prevCartItems => {
            return prevCartItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: newQuantity};
                }
                return item;
            });
        });
    };

    const total = CartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h3>Cart</h3>
            {CartItems.map((item) => (
                <CartItem key={item.id} item={item} onQuantityChange={manageQuantityChange}/>
            ))}
        </div>
    );
};

export default CustomerCart;
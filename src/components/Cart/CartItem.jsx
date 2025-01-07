import React, {useState} from "react";

const CartItem = ({item, onQuantityChange}) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const changeQuantity = (newQuantity) => {
        if (newQuantity < 1) {
            return;
        }
        setQuantity(newQuantity);
        onQuantityChange(item.id, newQuantity);
      };
  
  return (
    <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <p>quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>

        <button onClick={() => changeQuantity(item.quantity + 1)}>+</button>
        <button onClick={() => changeQuantity(item.quantity - 1)}>-</button>
   </div>
  );
};

export default CartItem;
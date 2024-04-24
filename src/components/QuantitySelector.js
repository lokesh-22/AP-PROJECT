import React, { useState } from 'react';

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 6)); // Limiting quantity to 6
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Limiting quantity to 1
  };

  return (
    <div className="m-2">
      <button className="btn btn-success rounded" onClick={decrement}>-</button>
      <span className="mx-2">{quantity}</span>
      <button className="btn btn-success rounded" onClick={increment}>+</button>
    </div>
  );
}

export default QuantitySelector;

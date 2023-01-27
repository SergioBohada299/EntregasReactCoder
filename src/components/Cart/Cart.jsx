import React from "react";

export const Cart = ({item}) => {
  return (
    <div className="btn-cart">
      <button className="btn btn-primary" type="submit">
        <img src="https://img.icons8.com/3d-plastilina/69/null/box--v1.png" />
      </button>
      <p className="text-warning">{item}</p>
    </div>
  );
};

export default Cart;

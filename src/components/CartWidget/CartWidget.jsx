import React from "react";
import { Link } from 'react-router-dom';
import { useCarritoContext } from "../../context/CarritoContext";
export const CartWidget = () => {
  const {getItemQuantity} = useCarritoContext();
  return (
    <div>
      <div className="btn-cart">
        <Link className="nav-link" to={"/cart"}><button className="btn btn-primary cartWidget" tySpe="submit">Carrito</button>
          <img src="https://img.icons8.com/3d-plastilina/69/null/box--v1.png" />
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;

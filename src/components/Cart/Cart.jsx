import React from "react";
import {Link} from 'react-router-dom';
import {ItemList} from '../ItemList/ItemList.jsx';
import { useCarritoContext } from "../../context/CarritoContext.js";
export const Cart = ({item}) => {
  const {carrito, emptyCart, totalPrice} = useCarritoContext()
  return (
    <>
    {
      carrito.length === 0
      ?
      <>
      <h2> Carrito vacio</h2>
      <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
      </>
      :
      <>
      <div className="container cartContainer">
        <ItemList prods={carrito} plantilla="ItemCart"/>;
        <div className="divButtons">
          <p>Resumen de compra: {totalPrice}</p>
          <button className="btn btn-danger" onClick={()=>emptyCart()}> Vaciar Carrito</button>
        <Link className="nav-link" to={"/"}><button className="btn btn-light">Continuar comprando</button></Link>
        <Link className="nav-link" to={"/checkout"}><button className="btn btn-light">Finalizar comprando</button></Link>
        </div>
      </div>
      </>
    }
    </>
  );
};

export default Cart;


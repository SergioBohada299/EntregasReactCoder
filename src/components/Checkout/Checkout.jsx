import React from "react";
import { useRef } from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import {Link} from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";

export const Checkout = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext();
  const datosForm = useRef();
  const consultarForm = (e) => {
    e.preventDefault();
    console.log(datosForm.current);
    const data = new FormData(datosForm.current); // Convertir form HTML a un objeto iretable (se maneja por metodos)
    console.log(data.get("nombre"));
    const cliente = Object.fromEntries(data); // Convertir obj iteralbe a simpe

    const aux = [...carrito]
    aux.forEach(prodCarrito =>{
        getProducto(prodCarrito.id).then(prodBDD => {
            prodBDD.stock -= prodCarrito.cant
            updateProducto(prodBDD.id, prodBDD)
        })
    })

    createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
        console.log("Compra exitosa")
    }) 
    e.target.reset()
    emptyCart()
    console.log(cliente);
  };
  return (
    <>
      {carrito.lenght === 0 ? (
        <>
        <h2> Para finalizar la compra debe tener productos en el carrito</h2>
      <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
        </>
      ) : (
        <div className="container contForm">
          <form onSubmit={consultarForm} ref={datosForm}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre y Apellido
              </label>
              <input type="text" className="form-control" name="nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre y Apellido
              </label>
              <input type="text" className="form-control" name="nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Documento
              </label>
              <input type="number" className="form-control" name="dni" />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Numero telefónico
              </label>
              <input type="number" className="form-control" name="celular" />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Dirección
              </label>
              <input type="text" className="form-control" name="direccion" />
            </div>
            <button type="submit" className="btn btn-primary">
              Finalizar compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;

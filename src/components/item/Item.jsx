import React from "react";

export const Item = ({ item }) => {
  return (
    <div class="prods">
      <div className="card" style={{ width: "18rem" }}>
        <img src={`/img/${item.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">
          {item.marca}
          </p>
          <p className="card-text">
          {item.precio}
          </p>
        <button className="btn btn-light">Ver Producto</button>
        </div>
      </div>
    </div>
  );
};

export default Item;

import React from "react";

export const Categorias = () => {
  return (
    <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Productos
    </a>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Arena Ecologíca
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Juguetes
        </a>
      </li>
    </ul>
  </li>
  );
};

export default Categorias;

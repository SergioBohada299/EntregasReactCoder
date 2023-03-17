import React from "react";
import {Link} from 'react-router-dom';

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
        <Link className="dropdown-item" to={'/category/1'}>Arena Ecologíca</Link>
      </li>
      <li>
        <Link className="dropdown-item" to={'/category/2'}>Juguetes</Link>
      </li>
    </ul>
  </li>
  );
};

export default Categorias;

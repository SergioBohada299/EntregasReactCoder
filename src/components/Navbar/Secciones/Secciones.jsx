import React from "react";
import {Link} from 'react-router-dom';

export const Secciones = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Arena
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Juguetes
        </a>
      </li>
    </>
  );
};

export default Secciones;

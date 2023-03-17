import React from "react";
import { Categorias } from "./Categorias/Categorias.jsx";
import { Secciones } from "./Secciones/Secciones.jsx";
import { Cart } from "../Cart/Cart.jsx";
import {Link} from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>EcoNekko</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Secciones/>
              <Categorias />
            </ul>
          </div>
        </div>
        <Cart item={"1"}/>
      </nav>
    </>
  );
};

export default Navbar;

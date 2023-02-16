import React from 'react';
import {useState, useEffect} from 'react';
import {consultarBD} from "../../utils/funciones.js";

export const ItemDetail = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultarBD('./json/productos.json').then(prods =>{
            const prod = prods.find(item => item.id === 1)
            setProducto(prod)
        })
    },[])
    return (
        <div>
            
        </div>
    );
}

export default ItemDetail;

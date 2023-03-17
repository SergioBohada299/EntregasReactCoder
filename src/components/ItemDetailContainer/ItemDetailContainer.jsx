import React from 'react';
import {useState, useEffect} from 'react';
import {consultarBD} from "../../utils/funciones.js";
import {ItemDetail} from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultarBD('../json/productos.json').then(prods =>{
            const prod = prods.find(item => item.id === parseInt(id))
            setProducto(prod)
        })
    },[])
    return (
        <div className="card mb-3 container itemDetail ">
            <ItemDetail prod={producto}/>
        </div>
    );
}

export default ItemDetailContainer;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVBrN-eF9x1p_9L9fQ5akcFzZRSVNXpQ0",
  authDomain: "react-44955-sergiobohada.firebaseapp.com",
  projectId: "react-44955-sergiobohada",
  storageBucket: "react-44955-sergiobohada.appspot.com",
  messagingSenderId: "454957983093",
  appId: "1:454957983093:web:d8f0a7be5c818a114fdf3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

/*
    CRUD PRODUCTOS
*/

export const cargarBDD = async() => {
    const promise = await fetch('./json/productos.json');
    const productos = await promise.json();
    productos.forEach(async (prods) => {
        await addDoc(collection(db, "productos"),{
            nombre: prods.nombre,
            marca: prods.marca,
            idCategoria: prods.idCategoria,
            stock: prods.stock,
            precio: prods.precio, 
            img: prods.img
        })
    });
}

export const getProductos = async() =>{
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async (id) =>{
    const producto = await getDoc(doc(db,"productos", id))
    const item = {...producto.data(), id: producto.id}
    console.log(producto)
    return item
};


export const updateProducto = async(id,info) => {
    await updateDoc(doc(db,"productos",id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "productos",id))
}

//Orden de compra

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) =>{
    const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
        datosCliente: cliente, 
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const oC = await getDoc(doc(db, "ordenCompra", id));
    const ordenCompra = {...oC.data(), id: oC.id}
    return ordenCompra
}
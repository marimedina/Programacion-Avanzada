import React, {Fragment, useState} from 'react';
import './App.css';
import Carrito from './Components/Carrito';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Producto from './Components/Producto';

function App() {
  //Crear listado de productos
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Remera de Thor', precio: 300},
    {id: 2, nombre: 'Remera de Ironman', precio: 400},
    {id: 3, nombre: 'Remera de Thanos', precio: 450},
    {id: 4, nombre: 'Remera de Avengers', precio: 350},
  ]);

  //State para un carrito de compras
  const [carrito, agregarProducto] = useState([])

  //Obtener fecha 
  //Otra forma para no poner Fragment es con los picos <></>
  const fecha = new Date().getFullYear()
  return (
    <Fragment>
      
      <Header
        titulo = 'Tienda virtual'
      />
      <h1>Vista de remeras</h1>

      {productos.map(producto => (
        <Producto
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          productos = {productos}
          agregarProducto = {agregarProducto}
        />
      ))}
      
      <Carrito
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />
      
      <Footer
        fecha = {fecha}
      />
    </Fragment>
    
  );
}

export default App;

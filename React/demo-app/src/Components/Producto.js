import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;

    //Agregar remera al carrito
    const seleccionarProducto = () => {
        const producto = productos.filter(producto => producto.id === id)[0]
        agregarProducto([
            ...carrito, 
            producto
        ]);
    }

    //eliminar producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id)
        //colocar los prod en el state
        agregarProducto(productos);
    }

    return ( 
    <div> 
        <h1>{nombre}</h1>
        <h2>{precio}</h2>

        {
            productos
            ? 
            (
                <button type="button" onClick={ () => seleccionarProducto(id) }> Comprar </button>
            )
            :
            <button type="button" onClick={ () => eliminarProducto(id) }> Eliminar </button>
        }
    </div>
    
    );
}
 
export default Producto;
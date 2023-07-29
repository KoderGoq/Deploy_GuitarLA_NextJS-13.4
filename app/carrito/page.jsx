'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCarritoContext } from '@/context/carritoContext';
import fomatearDinero from '@/helpers/dinero';
import styles from '@/styles/carrito.module.css';


export const metadata = {
  title: 'GuitarLA - Carrito',
  description: 'Tienda de guitarras, GuitarLA, Cursos, Blog y Guitarras'
}

const Page = () => {

  const { carrito, actualizarCantidad, eliminarProducto } = useCarritoContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalAcumulado = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(totalAcumulado)
  }, [carrito])


  return (
    <main className='contenedor'>
      <h2 className='heading'>Carrito de Compras</h2>

      <div className={styles.contenido}>
        <div className={styles.carrito}>
          <h2>Articulos</h2>
          {carrito.length === 0 ? 'Carrito Vacio' : (
            carrito.map(producto => (
              <div key={producto.id} className={styles.producto}>
                <div>
                  <Image src={producto.imagen} alt={`Imagen Guitarra ${producto.nombre}`} width={200} height={400} />
                </div>
                <div>
                  <p className={styles.nombre}>{producto.nombre}</p>

                  <div className={styles.cantidad}>
                    <p>Cantidad: </p>

                    <select
                      onChange={e => actualizarCantidad({
                        id: producto.id,
                        cantidad: e.target.value
                      })}
                      value={producto.cantidad}
                      className={styles.select}
                    >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                  </div>

                  <p className={styles.precio}><span>{fomatearDinero(producto.precio)}</span></p>
                  <p className={styles.subtotal}>Subtotal: <span>{fomatearDinero(producto.cantidad * producto.precio)}</span></p>
                </div>

                <button
                  className={styles.eliminar}
                  type='button'
                  onClick={() => eliminarProducto(producto.id)}
                >
                  X
                </button>

              </div>
            ))
          )}
        </div>
        <aside className={styles.resumen}>
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: {fomatearDinero(total)}</p>
        </aside>
      </div>
    </main>
  )
}

export default Page
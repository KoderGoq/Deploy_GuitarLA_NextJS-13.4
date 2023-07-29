'use client';

import { useState } from "react";
import Image from "next/image";
import styles from '@/styles/guitarras.module.css';
import Pagina404 from "@/app/[...not-found]/page";
import { useCarritoContext } from "@/context/carritoContext";
import fomatearDinero from "@/helpers/dinero";

export async function generateMetadata({ params }) {
  const { id } = params;
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${id}&populate=imagen`);
  const resultado = await respuesta.json();
  // console.log(resultado.data[0].attributes.nombre);

  // Verificar si hay datos en la respuesta
  if (resultado.data && resultado.data.length > 0) {
    const guitarra = resultado.data[0];
    return {
      title: `GuitarLA - ${guitarra.attributes.nombre}`,
      description: 'Tienda de guitarras, NextJS_13.4, Udemy, Blog'
    };
  } else {
    // Si no hay datos, puedes retornar un título y descripción genéricos o manejarlo de la forma que desees.
    return {
      title: 'GuitarLA - NotFound',
      description: 'Tienda de guitarras, NextJS_13.4, Udemy, Blog'
    };
  }
}


const GuitarraID = ({ guitarra }) => {
  if (!guitarra || guitarra.length === 0) {
    return <Pagina404 />; // Mostrar la página de error NotFound si la guitarra no es encontrada
  }
  const [cantidad, setCantidad] = useState(0);
  const { agregarCarrito } = useCarritoContext();
  const { nombre, descripcion, imagen, precio } = guitarra[0]?.attributes;


  const handlesubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert('Selecciona una cantidad')
      return;
    }

    const guitarrSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarrSeleccionada);
  }

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.url} width={500} height={300} alt={`Guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{fomatearDinero(precio)}</p>

        <form
          className={styles.formulario}
          onSubmit={handlesubmit}
        >
          <label htmlFor='cantidad'>Cantidad</label>
          <select
            value={cantidad}
            onChange={e => setCantidad(+e.target.value)}
            id='cantidad'
          >
            <option value='0' disabled>-- Selccione --</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <input
            type='submit'
            value={'Agregar al Carrito'}
          />
        </form>
      </div>
    </div>
  )
}

export default GuitarraID
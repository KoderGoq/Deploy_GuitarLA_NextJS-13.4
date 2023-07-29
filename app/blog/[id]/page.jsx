import Image from "next/image";
import { getPost } from "@/data/getPost";
import formatearFecha from "@/helpers/fecha";
import Pagina404 from "@/app/[...not-found]/page";
import styles from '@/styles/blog.module.css';


export async function generateMetadata({ params }) {
  const { id } = params;
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${id}&populate=imagen`);
  const resultado = await respuesta.json();
  // console.log(resultado.data[0].attributes.nombre);

  // Verificar si hay datos en la respuesta
  if (resultado.data && resultado.data.length > 0) {
    const post = resultado.data[0];
    return {
      title: `GuitarLA - ${post.attributes.titulo}`,
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


const BlogID = async ({ params }) => {
  const { id } = params;
  const datos = await getPost(id);

  if (!datos || datos.length === 0) {
    return <Pagina404 />; // Mostrar la página de error NotFound si el post no es encontrado
  }

  const { titulo, imagen, publishedAt, contenido } = datos[0].attributes

  return (
    <article className={`${styles['mt-3']} ${styles.post}`}>
      <Image className={styles.imagen} src={imagen.data.attributes.url} width={800} height={500} alt={`Imagen sobre ${titulo}`} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{contenido}</p>
      </div>
    </article>
  )
}

export default BlogID
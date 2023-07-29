import Image from "next/image";
import Link from "next/link";
import formatearFecha from "@/helpers/fecha";
import styles from '@/styles/blog.module.css';

const Post = ({ post }) => {
  // console.log(post);

  const { titulo, contenido, url, publishedAt, imagen } = post;

  return (
    <article className={styles.post}>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen del blog ${titulo}`} width={500} height={300} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
}

export default Post
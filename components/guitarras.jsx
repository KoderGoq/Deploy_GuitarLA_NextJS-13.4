import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/guitarras.module.css';
import fomatearDinero from "@/helpers/dinero";

const Guitarras = ({ guitarras }) => {

  const { nombre, precio, url, imagen, descripcion } = guitarras;

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{fomatearDinero(precio)}</p>

        <Link className={styles.enlace} href={`/guitarras/${url}`}>Ver producto</Link>
      </div>
    </div>
  )
}

export default Guitarras
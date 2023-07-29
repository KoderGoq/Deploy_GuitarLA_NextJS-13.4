import Image from "next/image";
import styles from '@/styles/nosotros.module.css';


export const metadata = {
  title: 'GuitarLA - Nosotros',
  description: 'Tienda de Guitarras, Guitarras, Blog, NextJS'
}

const Page = () => {
  return (
    <main className='contenedor'>
      <h2 className='heading'>Nosotros</h2>

      <div className={styles.contenido}>
        <Image src={'/img/nosotros.jpg'} width={800} height={500} alt='Imagen Nosotros' />

        <div className={''}>
          <p>
            Aenean aliquam erat ut nunc facilisis malesuada. Nulla tempus molestie mauris. Praesent eget nibh ut ante tincidunt accumsan id sit amet ligula. In hac habitasse platea dictumst. Vivamus convallis tincidunt tristique. Curabitur viverra auctor libero quis pulvinar. Maecenas vel auctor enim, ultrices commodo libero. .
          </p>
          <p>
            Nullam auctor facilisis nulla nec vehicula. Integer ut aliquam tortor. Aliquam erat volutpat. Praesent eu faucibus justo, ut aliquam diam. Praesent aliquam eros nisl, egestas ullamcorper dui iaculis eget.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
import Guitarras from '@/components/guitarras';
import styles from '@/styles/grid.module.css';
import { getGuitarras } from '@/data/getGuitarras';

export const metadata = {
  title: 'GuitarLA - Guitarras',
  description: 'Tienda de Guitarras, Guitarras, Blog, NextJS'
}

const Tienda = async () => {

  const guitarras = await getGuitarras();
  // console.log(guitarras);

  return (
    <main className='contenedor'>
      <h2 className='heading'>Nuestra Colección</h2>

      <div className={styles.grid}>
        {guitarras?.map(guitarra => (
          <Guitarras
            key={guitarra.id}
            guitarras={guitarra.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Tienda
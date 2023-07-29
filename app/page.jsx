import Guitarras from "@/components/guitarras";
import styles from '@/styles/grid.module.css';
import Post from "@/components/post";
import Curso from "@/components/curso";

export default async function Home() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
  ]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resPost.json(),
    resCurso.json()
  ]);

  return (
    <>
      <main className='contenedor'>
        <h2 className='heading'>Nuestra Coleccion</h2>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarras
              key={guitarra.id}
              guitarras={guitarra.attributes}
            />
          ))}
        </div>
      </main>

      <Curso
        curso={curso}
      />

      <section className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </section>
    </>

  )
}
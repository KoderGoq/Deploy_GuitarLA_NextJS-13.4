import Post from "@/components/post";
import { getPosts } from "@/data/getPost";
import styles from '@/styles/grid.module.css';

export const metadata = {
  title: 'GuitarLA - Blog',
  description: 'Tienda de Guitarras, Guitarras, Blog, NextJS'
}


const Blog = async () => {

  const posts = await getPosts();

  return (
    <main className='contenedor'>
      <h2 className='heading'>Blog</h2>
      <div className={styles.grid}>
        {posts?.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog
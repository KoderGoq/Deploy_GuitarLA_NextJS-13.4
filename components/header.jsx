'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/header.module.css';

const Header = () => {

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href='/'>
          <Image src='img/logo.svg' width={300} height={40} alt='Imagen Logo' />
        </Link>

        <nav className={styles.navegacion}>
          <Link href='/' className={pathname === '/' ? styles.active : ''}>Inicio</Link>
          <Link href='/nosotros' className={pathname === '/nosotros' ? styles.active : ''}>Nosotros</Link>
          <Link href='/guitarras' className={pathname === '/guitarras' ? styles.active : ''}>Tienda</Link>
          <Link href='/blog' className={pathname === '/blog' ? styles.active : ''}>Blog</Link>
          <Link href={'/carrito'}>
            <Image src={'/img/carrito.png'} alt='Imagen Carrito' width={40} height={10} />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
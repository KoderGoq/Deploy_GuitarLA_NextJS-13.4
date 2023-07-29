import Header from '@/components/header';
import Footer from '@/components/footer';
import { CarritoProvider } from '@/context/carritoContext';
import '@/styles/globals.css';

export const metadata = {
  title: 'GuitarLA - NextJS',
  description: 'Tienda de guitarras, GuitarLA, Cursos, Blog y Guitarras'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <CarritoProvider>
          {children}
        </CarritoProvider>
        <Footer />
      </body>
    </html>
  )
}
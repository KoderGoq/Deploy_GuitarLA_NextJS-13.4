import Link from "next/link";

// export const metadata = {
//   title: 'GuitarLA - Not Found'
// }


const Pagina404 = () => {
  return (
    <>
      <p className='error'>Pagina o Guitarra No Encontrada</p>
      <p className='error'>Error 404</p>
      <Link href={'/'} className='error-enlace'>
        Ir a Inicio
      </Link>
    </>
  )
}

export default Pagina404
import { getGuitarra } from "@/data/getGuitarras";
import GuitarraID from "@/components/guitarraUrl";
import Pagina404 from "@/app/[...not-found]/page";



const GuitarraD = async ({ params: { id } }) => {
  const guitarra = await getGuitarra(id);
  return (
    <>
      {guitarra.length === 0 ?
        <Pagina404 />
        :
        <GuitarraID
          guitarra={guitarra}
        />
      }
    </>
  )
}

export default GuitarraD
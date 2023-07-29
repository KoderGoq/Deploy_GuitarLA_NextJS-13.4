const getGuitarras = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data } = await respuesta.json();
  return data;
}

const getGuitarra = async (id) => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${id}&populate=imagen`);
  const { data: guitarra } = await respuesta.json();
  return guitarra;

}

export {
  getGuitarras,
  getGuitarra
}
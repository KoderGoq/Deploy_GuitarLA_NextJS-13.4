const getCurso = async () => {
  const url = `${process.env.API_URL}/curso?populate=imagen`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  return data;
}

export {
  getCurso
}
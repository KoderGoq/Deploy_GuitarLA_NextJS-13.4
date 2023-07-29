const getPosts = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data } = await respuesta.json();
  return data;
}

const getPost = async (id) => {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${id}&populate=imagen`);
  const { data } = await respuesta.json();
  return data;

}

export {
  getPosts,
  getPost
}
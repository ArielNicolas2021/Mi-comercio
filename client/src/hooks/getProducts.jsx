export const getProducts = async () => {
  // const LINK = 'https://mi-comercio-three.vercel.app/api'
  const LINK = 'http://localhost:1234/api'
  try {
    const req = await fetch(LINK + '/products/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await req.json();
    return res
  }
  catch (e) {
    console.error(e);
  };
}

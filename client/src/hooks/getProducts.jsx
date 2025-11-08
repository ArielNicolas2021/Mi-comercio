export const getProducts = async () => {
  try {
    const req = await fetch('https://mi-comercio-three.vercel.app/api/products/', {
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

export const getProduct = async (code) => {
  try {
    const req = await fetch('https://mi-comercio-three.vercel.app/api/products/' + code, {
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

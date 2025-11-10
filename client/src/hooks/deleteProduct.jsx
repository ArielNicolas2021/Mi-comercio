export const deleteProduct = async (code) => {
  try {
    const req = await fetch('https://mi-comercio-three.vercel.app/api/products/' + code, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await req.json();
    return res;
  }
  catch (e) {
    console.log(e);
  };
};

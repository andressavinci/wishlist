const getProducts = async () => {
  const response = await fetch('/api/products');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

  return body;
};

export default getProducts;

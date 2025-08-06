function Product({ addToCart }) {
  const products = [
    { name: "Susu Murni", price: 30000 },
    { name: "tepung terigu 4kg", price: 35000 },
    { name: "kebab", price: 18000 },
    { name: "Kue Balok", price: 45000 },
    { name: "Kue kering", price: 15000 },
    { name: "Seblak", price: 5000 },
  ];

  return (
    <div className="p-5 border rounded-md">
      <div>Product</div>
      <div className="grid grid-cols-3 gap-2.5">
        {products.length > 0 &&
          products.map((data, idx) => {
            return (
              <div
                key={idx}
                className="border rounded-md w-[200px] p-1"
                onClick={() => {
                  addToCart(data);
                }}
              >
                <p>Nama : {data.name}</p>
                <p>Harga : {data.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;

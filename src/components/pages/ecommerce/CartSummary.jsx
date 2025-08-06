function CartSummary({ cart, removeFromChart }) {
  return (
    <div className="p-5 border rounded-md ">
      <div>CartSummary</div>
      {cart.length === 0 && (
        <div className="flex flex-col items-center">
          <img className="bg-red-500" src="/shopping-cart.svg" alt="chart" />
          <p>Keranjang sedang Kosong, masukan produk</p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-2.5">
        {cart.length > 0 &&
          cart.map((product, idx) => {
            return (
              <div className="border rounded-md w-[200px] p-1" key={idx}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <div
                  className="self-end"
                  onClick={() => removeFromChart(product.name)}
                >
                  <img
                    className="bg-red-500 rounded-full"
                    src="/x-circle.svg"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CartSummary;

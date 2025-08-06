import Product from "./Product";
import CartSummary from "./CartSummary";
import { useState } from "react";

function ShoppingApp() {
  const [cart, setCart] = useState([]);

  /**
   *
   * @param {Object} product
   * @param {string} product.name
   * @param {number} product.price
   */
  const addToCart = (product) => {
    setCart((chart) => {
      for (let belanja of chart) {
        if (belanja.name === product.name) {
          return chart;
        }
      }
      return [...chart, product];
    });
  };

  const removeFromCart = (productName) => {
    setCart((chart) =>
      chart.filter((product) => {
        return product.name !== productName;
      })
    );
  };

  return (
    <section className="flex flex-row p-5 m-5 gap-5">
      <Product addToCart={addToCart} />
      <CartSummary cart={cart} removeFromChart={removeFromCart} />
    </section>
  );
}

export default ShoppingApp;

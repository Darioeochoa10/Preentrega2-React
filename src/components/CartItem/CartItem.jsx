import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, img, price, stock, category }, props) => {
  const { cart } = useContext(CartContext);
  const cartItem = cart.find((item) => item.id === id);
  const totalItem = cartItem ? cartItem.quantity * price : 0;

  console.log(props);

  return (
    <div className="container">
      <article className="CardItem">
        <div className="CardItem">
          <section className="CartCardBody">
            <div className="Card-body">
              <h2 className="Info">{name}</h2>
              <p className="Info">Price: $ {price}</p>
              <p className="Info">
                Quantity: {cartItem ? cartItem.quantity : 0}
              </p>
              <p className="Info">Total: $ {totalItem}</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default CartItem;

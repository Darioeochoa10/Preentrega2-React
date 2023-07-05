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
          <picture className="CartImgCard">
            <img src={img} alt={name} className="CartItemImg" />
          </picture>
          <section className="CartCardBody">
            <div className="Card-body">
              <h2 className="Info">{name}</h2>
              <p className="Info">Precio: $ {price}</p>
              <p className="Info">
                Cantidad: {cartItem ? cartItem.quantity : 0}
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

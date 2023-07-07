import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1 className="text-center">No hay items en el carrito</h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cartStyle">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <div className="btnCartContainer">
        <button onClick={() => clearCart()} className="Button btn btn-primary">
          Limpiar carrito
        </button>
        <Link to="/" className="Button btn btn-primary">
          Volver a productos
        </Link>
      </div>
      <Link to="/checkout" className="btnCheckout">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;

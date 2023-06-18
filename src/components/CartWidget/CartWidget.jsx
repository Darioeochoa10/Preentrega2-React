import cart from "../CartWidget/assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img className="cart-icon" src={cart} alt="bag-widget" />0
    </div>
  );
};

export default CartWidget;

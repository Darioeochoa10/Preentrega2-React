import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import "./Checkout.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

  const handleConfirm = (userData) => {
    const order = {
      buyer: userData,
      products: cart,
      total: total,
    };
    console.log(order);

    const orderRef = collection(db, "orders");

    if (userData && cart && total) {
      console.log("userData:", userData);
      console.log("cart:", cart);
      console.log("total:", total);

      addDoc(orderRef, order)
        .then((doc) => {
          setOrderId(doc.id);
          console.log(doc.id);
          clearCart();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      console.log("error: missing data");
    }
  };

  if (orderId) {
    return (
      <div className="container CardItem">
        <h1 className="main-title">Thank you for your buy!</h1>
        <p>Your Number of your Order is: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="Container">
      <h1>Finish your Buy</h1>
      <CheckoutForm onConfirm={handleConfirm} />
    </div>
  );
};

export default Checkout;

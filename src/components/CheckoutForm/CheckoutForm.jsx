import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name: name || "",
      phone: phone || "",
      email: email || "",
    };

    onConfirm(userData);
  };

  return (
    <div className="checkout-form">
      <form onSubmit={handleConfirm} className="Form">
        <div className="Form-row">
          <label className="Label">
            Name
            <input
              className="Input"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
        </div>
        <div className="Form-row">
          <label className="Label">
            Phone
            <input
              className="Input"
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </label>
        </div>
        <div className="Form-row">
          <label className="Label">
            Email
            <input
              className="Input"
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
        </div>
        <div className="Form-row">
          <button type="submit" className="Button">
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="IteamHeader"> {name} </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Category: {category}</p>
        <p className="Info">Description: {description}</p>
        <p className="Info">Price: {price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Buy
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;

import { useState, useEffect } from "react";
import { getProducts } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="Welcome"> {greetings} </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

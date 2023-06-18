import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="grid-container">
      <div className="ListGroup">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

import { useCart } from "../../Providers/Cart";

const CartList = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="Products">
      {cart.map((item, index) => (
        <div className="BoxItem" key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.description}</p>
          <h4>{item.price}R$</h4>
          <button onClick={() => removeFromCart(index)}>
            Remover do carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;

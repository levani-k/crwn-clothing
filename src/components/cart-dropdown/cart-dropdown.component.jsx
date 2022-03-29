import { useContext } from "react";
import { CartContext } from "contexts/cart.context";
import CartItem from "components/cart-item/cart-item.component";
import Button from "components/button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

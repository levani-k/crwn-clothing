import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "contexts/cart.context";
import CartItem from "components/cart-item/cart-item.component";
import Button from "components/button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

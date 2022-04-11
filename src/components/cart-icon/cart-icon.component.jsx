import { useContext } from "react";
import { CartContext } from "contexts/cart.context";
import {
  ShoppingIcon,
  CartItemContainer,
  ItemCount,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen((isCartOpen) => !isCartOpen);
  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;

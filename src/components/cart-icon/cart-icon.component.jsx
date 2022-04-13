import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "store/cart/cart.selector";
import { setIsCartOpen } from "store/cart/cart.action";

import {
  ShoppingIcon,
  CartItemContainer,
  ItemCount,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;

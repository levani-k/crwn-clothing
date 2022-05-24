import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from 'store/cart/cart.selector'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from 'store/cart/cart.action'

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles'

type CartItem = {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity: number
}

type CheckoutItemProps = {
  cartItem: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const { name, imageUrl, price, quantity } = cartItem

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem

import { FC, memo } from 'react'
import { CartItemContainer, ItemDetails, Name } from './cart-item.styles'

type CartItemType = {
  name: string
  imageUrl: string
  price: number
  quantity: number
}

type CartItemProps = {
  cartItem: CartItemType
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
})

export default CartItem

import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from 'store/cart/cart.action'
import { selectCartItems } from 'store/cart/cart.selector'
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles'
import Button, { BUTTON_TYPE_CLASSES } from 'components/button/button.component'

type ProductType = {
  id: number
  name: string
  price: number
  imageUrl: string
}

type ProductCardProps = {
  product: ProductType
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, price, imageUrl } = product

  const addProductTocart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductTocart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard

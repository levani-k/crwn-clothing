import { FC } from 'react'
import ProductCard from 'components/product-card/product-card.component'
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewWrapper,
} from './category-preview.styles'

type Product = {
  id: number
  name: string
  price: number
  imageUrl: string
}

type CategoryPreviewProps = {
  title: string
  products: Product[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <CategoryPreviewTitle to={title}>
        {title.toUpperCase()}
      </CategoryPreviewTitle>
    </h2>
    <CategoryPreviewWrapper>
      {products
        .filter((_, index: number) => index < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryPreviewWrapper>
  </CategoryPreviewContainer>
)

export default CategoryPreview

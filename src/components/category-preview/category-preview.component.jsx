import ProductCard from "components/product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewWrapper,
} from "./category-preview.styles.js";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <CategoryPreviewTitle to={title}>
        {title.toUpperCase()}
      </CategoryPreviewTitle>
    </h2>
    <CategoryPreviewWrapper>
      {products
        .filter((_, index) => index < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryPreviewWrapper>
  </CategoryPreviewContainer>
);

export default CategoryPreview;

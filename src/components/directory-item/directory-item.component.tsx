import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles'

type CategoryType = {
  imageUrl: string
  title: string
  route: string
}

type DirectoryItemProps = {
  category: CategoryType
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()

  const navigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem

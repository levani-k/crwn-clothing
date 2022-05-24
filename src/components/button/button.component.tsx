import { FC, ButtonHTMLAttributes } from 'react'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles'

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButtonType = (
  buttonType = BUTTON_TYPE_CLASSES.base,
): typeof BaseButton => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.google:
      return GoogleSignInButton
    case BUTTON_TYPE_CLASSES.inverted:
      return InvertedButton
    default:
      return BaseButton
  }
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButtonType(buttonType)
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button

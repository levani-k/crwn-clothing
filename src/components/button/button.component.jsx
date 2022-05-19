import React from 'react'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles.js'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButtonType = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  switch (buttonType) {
    case 'google-sign-in':
      return GoogleSignInButton
    case 'inverted':
      return InvertedButton
    default:
      return BaseButton
  }
}

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButtonType(buttonType)
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button

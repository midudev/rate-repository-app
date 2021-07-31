import React from 'react'
import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'

const stylesText ={
  text: {
    color: '$$theme.colors.textPrimary',
    fontSize: '$$theme.fontSizes.subheading',
    fontFamily: '$$theme.fonts.main',
    fontWeight: '$$theme.fontWeights.normal'
  },
  colorPrimary: {
    color: '$$theme.colors.primary'
  },
  colorSecondary: {
    color: '$$theme.colors.textSecondary'
  },
  bold: {
    fontWeight: '$$theme.fontWeights.bold'
  },
  subheading: {
    fontSize: '$$theme.fontSizes.subheading'
  },
  textAlignCenter: {
    textAlign: 'center'
  }
}

export default function StyledText ({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {
  const {styles} = useStyles(stylesText)
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

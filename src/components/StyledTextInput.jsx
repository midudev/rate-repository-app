import React from 'react'
import { TextInput } from 'react-native'
import useStyles from "../hooks/useStyles"

const stylesTextInput = {
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    color: "$$theme.colors.textPrimary"
  },
  error: {
    borderColor: 'red'
  }
}

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const {styles} = useStyles(stylesTextInput)
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]

  return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput

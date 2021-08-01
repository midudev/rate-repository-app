import React from 'react'
import { Text, View } from 'react-native'
import { render } from '@testing-library/react-native'
import { describe } from '@jest/globals'

const Greeting = ({name}) => {
  return (
    <View>
      <Text testID='greetingText'>Hello {name}</Text>
    </View>
  )
}

describe('Greeting', () => {
  it('renders a greeting message based on the name prop', () => {
    const { getByTestId } = render(<Greeting name='midudev' />)

    const el = getByTestId('greetingText')
    expect(el).toHaveTextContent('Hello midudev')
  })
})
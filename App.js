import React from 'react'
import Main from './src/components/Main.jsx'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient.js'

const apolloClient = createApolloClient()

export default function App () {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}

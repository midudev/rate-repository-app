import React from 'react'
import Main from './src/components/Main.jsx'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient.js'
import authStorage from './src/utils/authStorage.js'
import ThemeStoreProvider from './src/themes/ThemeStore.jsx'

const apolloClient = createApolloClient(authStorage)

export default function App () {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeStoreProvider>
        <StatusBar style='light' />
        <NativeRouter>
          <Main />
        </NativeRouter>
      </ThemeStoreProvider>
    </ApolloProvider>
  )
}

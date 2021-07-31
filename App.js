import React from 'react'
import Main from './src/components/Main.jsx'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient.js'
import Router from './src/components/Router'

const apolloClient = createApolloClient()

export default function App () {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='light' />
      <Router>
        <Main />
      </Router>
    </ApolloProvider>
  )
}

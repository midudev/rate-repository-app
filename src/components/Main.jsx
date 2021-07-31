import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar'
import { Redirect, Route, Switch } from 'react-router-native'
import LogInPage from '../pages/LogIn.jsx'
import SignOut from '../pages/SignOut.jsx'
import useStyles from '../hooks/useStyles.js'

const stylesComponent = {
  container : {
    height: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: '$$theme.colors.backgroundPrimary'
  }
}

const Main = () => {
  const {styles} = useStyles(stylesComponent)
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <LogInPage />
        </Route>
        <Route path='/signout' exact>
          <SignOut />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}

export default Main

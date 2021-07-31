import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../themes/theme.js'
import { Link, useLocation } from 'react-router-native'
import useAuthorizedUser from '../hooks/useAuthorized.js'
import SwitcherTheme from './SwitchTheme.jsx'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary
  },
  switcher: {
    marginRight: 15
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  const {isAuthorized} = useAuthorizedUser()

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        {
          isAuthorized
            ? <AppBarTab to='/signout'>Sign Out</AppBarTab>
            : <AppBarTab to='/signin'>Sign In</AppBarTab>
        }
      </ScrollView>
      <SwitcherTheme style={styles.switcher} />
    </View>
  )
}

export default AppBar

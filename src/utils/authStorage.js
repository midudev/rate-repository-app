import AsyncStorage from '@react-native-async-storage/async-storage';

const NAMESPACE = 'auth'
const ACCESS_TOKEN_KEY = `${NAMESPACE}:token`

export default {
  getAccessToken: async () => {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
    return token && JSON.parse(token)
  },

  setAccessToken: async (token) => {
    const stringifiedToken = JSON.stringify(token)
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, stringifiedToken)
  },

  removeAccessToken: async () => {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY)
  }
}

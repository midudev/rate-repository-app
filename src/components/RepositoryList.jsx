import React from 'react'
import { FlatList, Text } from 'react-native'
import RepositoryItem from './RepositoryItem.jsx'
import useRepositories from '../hooks/useRepositories.js'

export const RepositoryListUI = ({ onEndReach, repositories }) => {
  return (
    <FlatList
      data={repositories}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
}

const RepositoryList = () => {
  const { fetchMore, repositories } = useRepositories({ first: 6 })

  const handleEndReach = () => {
    fetchMore()
  }

  return (
    <RepositoryListUI onEndReach={handleEndReach} repositories={repositories} />
  )
}

export default RepositoryList

import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries.js'

const useRepositories = (variables) => {
  const { data = {}, loading, refetch, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  })

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage

    if (!canFetchMore) return

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      },
      updateQuery: (previousData, { fetchMoreResult }) => {
        return {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousData.repositories.edges,
              ...fetchMoreResult.repositories.edges
            ]
          }
        }
      }
    })
  }

  const { repositories = null } = data

  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return {
    fetchMore: handleFetchMore,
    loading,
    repositories: repositoriesNodes,
    refetch
  }
}

export default useRepositories

import { gql } from 'apollo-boost'

export const GET_REPOSITORIES = gql`
query ($first: Int, $after: String) {
  repositories (first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }

    edges {
      node {
        id               
        name                 
        ownerName             
        createdAt                   
        fullName                    
        reviewCount                  
        ratingAverage                   
        forksCount                      
        stargazersCount                   
        description                       
        language                      
        ownerAvatarUrl
      } 
    }
  }
}
`

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`

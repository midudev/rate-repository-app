import React from 'react'
import { render } from '@testing-library/react-native'
import { RepositoryListUI } from './RepositoryList.jsx'
import { expect } from '@jest/globals'

describe('RepositoryList', () => {
  describe('RepositoryListUI', () => {
    it('renders repository info correctly', () => {
      const repositories = [
        {
            "id": "jaredpalmer.formik",
            "name": "formik",
            "ownerName": "jaredpalmer",
            "createdAt": "2021-07-25T14:28:45.841Z",
            "fullName": "jaredpalmer/formik",
            "reviewCount": 5,
            "ratingAverage": 90,
            "forksCount": 2269,
            "stargazersCount": 27874,
            "description": "Build forms in React, without the tears 😭",
            "language": "TypeScript",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/50745844?v=4",
            "__typename": "Repository"
        },
        {
            "id": "async-library.react-async",
            "name": "react-async",
            "ownerName": "async-library",
            "createdAt": "2021-07-25T13:28:45.841Z",
            "fullName": "async-library/react-async",
            "reviewCount": 3,
            "ratingAverage": 72,
            "forksCount": 87,
            "stargazersCount": 1999,
            "description": "🍾 Flexible promise-based React data loader",
            "language": "JavaScript",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/54310907?v=4",
            "__typename": "Repository"
        },
        {
            "id": "rzwitserloot.lombok",
            "name": "lombok",
            "ownerName": "rzwitserloot",
            "createdAt": "2021-07-25T12:28:45.841Z",
            "fullName": "rzwitserloot/lombok",
            "reviewCount": 0,
            "ratingAverage": 0,
            "forksCount": 1972,
            "stargazersCount": 10413,
            "description": "Very spicy additions to the Java programming language.",
            "language": "Java",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/45949248?v=4",
            "__typename": "Repository"
        },
        {
            "id": "rails.rails",
            "name": "rails",
            "ownerName": "rails",
            "createdAt": "2021-07-25T11:28:45.841Z",
            "fullName": "rails/rails",
            "reviewCount": 2,
            "ratingAverage": 100,
            "forksCount": 19589,
            "stargazersCount": 48776,
            "description": "Ruby on Rails",
            "language": "Ruby",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/4223?v=4",
            "__typename": "Repository"
        },
        {
            "id": "django.django",
            "name": "django",
            "ownerName": "django",
            "createdAt": "2021-07-25T10:28:45.841Z",
            "fullName": "django/django",
            "reviewCount": 2,
            "ratingAverage": 73,
            "forksCount": 25128,
            "stargazersCount": 58821,
            "description": "The Web framework for perfectionists with deadlines.",
            "language": "Python",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/27804?v=4",
            "__typename": "Repository"
        },
        {
            "id": "apollographql.apollo-client",
            "name": "apollo-client",
            "ownerName": "apollographql",
            "createdAt": "2021-07-25T09:28:45.841Z",
            "fullName": "apollographql/apollo-client",
            "reviewCount": 0,
            "ratingAverage": 0,
            "forksCount": 2150,
            "stargazersCount": 16434,
            "description": ":rocket: A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.",
            "language": "TypeScript",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/17189275?v=4",
            "__typename": "Repository"
        },
        {
            "id": "reduxjs.redux",
            "name": "redux",
            "ownerName": "reduxjs",
            "createdAt": "2021-07-25T08:28:45.841Z",
            "fullName": "reduxjs/redux",
            "reviewCount": 0,
            "ratingAverage": 0,
            "forksCount": 14775,
            "stargazersCount": 56395,
            "description": "Predictable state container for JavaScript apps",
            "language": "TypeScript",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/13142323?v=4",
            "__typename": "Repository"
        },
        {
            "id": "spring-projects.spring-framework",
            "name": "spring-framework",
            "ownerName": "spring-projects",
            "createdAt": "2021-07-25T07:28:45.841Z",
            "fullName": "spring-projects/spring-framework",
            "reviewCount": 0,
            "ratingAverage": 0,
            "forksCount": 30658,
            "stargazersCount": 43739,
            "description": "Spring Framework",
            "language": "Java",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/317776?v=4",
            "__typename": "Repository"
        },
        {
            "id": "zeit.next.js",
            "name": "next.js",
            "ownerName": "zeit",
            "createdAt": "2021-07-25T06:28:45.841Z",
            "fullName": "zeit/next.js",
            "reviewCount": 0,
            "ratingAverage": 0,
            "forksCount": 13672,
            "stargazersCount": 71127,
            "description": "The React Framework",
            "language": "JavaScript",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/14985020?v=4",
            "__typename": "Repository"
        },
        {
            "id": "zeit.swr",
            "name": "swr",
            "ownerName": "zeit",
            "createdAt": "2021-07-25T05:28:45.841Z",
            "fullName": "zeit/swr",
            "reviewCount": 0,
            "ratingAverage": 0,
            "forksCount": 630,
            "stargazersCount": 18107,
            "description": "React Hooks for remote data fetching",
            "language": "TypeScript",
            "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/14985020?v=4",
            "__typename": "Repository"
        }
      ]

      const { getAllByTestId } = render(<RepositoryListUI repositories={repositories} />)

      const repositoryNames = getAllByTestId('RepositoryItemName')
      const repositoryDescriptions = getAllByTestId('RepositoryItemDescription')
      const repositoryLanguages = getAllByTestId('RepositoryItemLanguage')

      repositories.forEach((repository, index) => {
        expect(repositoryNames[index]).toHaveTextContent(repository.fullName)
        expect(repositoryDescriptions[index]).toHaveTextContent(repository.description)
        expect(repositoryLanguages[index]).toHaveTextContent(repository.language)
      })
    })
  })
})
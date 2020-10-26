import ApolloClient from 'apollo-boost'
//apollo-boost는 Apollo에서 제공하는 GraphQL 클라이언트 패키지

const client = new ApolloClient ({
  uri: 'http://localhost:4000'
})

export default client
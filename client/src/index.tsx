import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

//apollo-boost는 Apollo에서 제공하는 GraphQL 클라이언트 패키지

const link = createHttpLink({
  uri: "localhost:4000"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});



ReactDOM.render(
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React    from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import {cache} from './apolloClient/cache';

import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const link = createHttpLink({
  uri: "http://localhost:4000"
});


const client = new ApolloClient({
  cache,
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
